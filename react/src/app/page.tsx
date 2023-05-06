import AppNgIf from './components/ng-if'
import AppNgIfElse from './components/ng-if-else'
import AppNgFor from './components/ng-for'
import AppNgSwitch from './components/ng-switch'
import AppTemplateInterpolation from './components/template-interpolation'
import AppDataBinding from './components/data-binding'
import AppInput from './components/input/input'
import AppOutput from './components/output/output'
import AppTwoWayBinding from './components/two-way-binding/two-way-binding'
import AppOnChanges from './components/on-changes/on-changes'
import AppEventBinding from './components/event-binding'
import AppViewChild from './components/view-child'
import AppNgClass from './components/ng-class/ng-class'
import AppNgStye from './components/ng-style'
import AppStyles from './components/styles/styles'
import AppPipe from './components/pipe/pipe'
import AppAttributeDirective from './components/attribute-directive/attribute-directive'
import AppRouter from './components/router/router'
import AppIsPlatformBrowser from './components/is-platform-browser'

export default function Home() {
  return (
    <>
      <AppNgIf />
      <AppNgIfElse />
      <AppNgFor />
      <AppNgSwitch />
      <AppTemplateInterpolation />
      <AppDataBinding />
      <AppInput />
      <AppOutput />
      <AppTwoWayBinding />
      <AppOnChanges />
      <AppEventBinding />
      <AppViewChild />
      <AppNgClass />
      <AppNgStye />
      <AppStyles />
      <AppPipe />
      <AppAttributeDirective />
      <AppRouter />
      <AppIsPlatformBrowser />
    </>
  )
}
