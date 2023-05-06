'use client'
import { appChangeColor } from './change-color.directive'

const AppAttributeDirective = () => {
  return (
    <>
      <h4>Attribute directive</h4>

      <button ref={(nativeElement) => appChangeColor(nativeElement)}>
        Change color
      </button>
    </>
  )
}

export default AppAttributeDirective
