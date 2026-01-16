export type ThemeMode = 'light' | 'dark' | 'system'

export const useTheme = () => {
  const themeMode = useState<ThemeMode>('themeMode', () => 'system')

  const setTheme = (mode: ThemeMode) => {
    themeMode.value = mode
    updateDOM()
    if (import.meta.client) {
      localStorage.setItem('theme', mode)
    }
  }

  const cycleTheme = () => {
    const modes: ThemeMode[] = ['system', 'light', 'dark']
    const currentIndex = modes.indexOf(themeMode.value)
    const nextIndex = (currentIndex + 1) % modes.length
    setTheme(modes[nextIndex] as ThemeMode)
  }

  const getEffectiveTheme = (): 'light' | 'dark' => {
    if (themeMode.value === 'system') {
      if (import.meta.client) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      return 'light'
    }
    return themeMode.value
  }

  const updateDOM = () => {
    if (import.meta.client) {
      const effective = getEffectiveTheme()
      if (effective === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  const initTheme = () => {
    if (import.meta.client) {
      const saved = localStorage.getItem('theme') as ThemeMode | null
      if (saved && ['light', 'dark', 'system'].includes(saved)) {
        themeMode.value = saved
      }
      updateDOM()

      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (themeMode.value === 'system') {
          updateDOM()
        }
      })
    }
  }

  return {
    themeMode,
    setTheme,
    cycleTheme,
    getEffectiveTheme,
    initTheme
  }
}
