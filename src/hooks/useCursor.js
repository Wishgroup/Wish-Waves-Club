import { useEffect } from 'react'

export function useCursor(showCursor) {
  useEffect(() => {
    const wrapper = document.querySelector('.grax_tm_all_wrap')
    if (wrapper) {
      wrapper.setAttribute('data-magic-cursor', showCursor ? '' : 'hide')
    }
  }, [showCursor])
}

