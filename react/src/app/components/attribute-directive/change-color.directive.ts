export function appChangeColor(nativeElement: null | HTMLElement) {
  let yellowgreen = false

  if (nativeElement) {
    nativeElement?.addEventListener('click', () => {
      nativeElement.style.backgroundColor = yellowgreen
        ? 'orange'
        : 'yellowgreen'
      yellowgreen = !yellowgreen
    })
  }
}
