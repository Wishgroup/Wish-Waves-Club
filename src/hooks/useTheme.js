import { useEffect } from 'react'

export function useTheme(isDark) {
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDark])
}

