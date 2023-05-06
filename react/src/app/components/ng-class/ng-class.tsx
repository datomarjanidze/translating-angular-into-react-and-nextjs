import { clsx } from 'clsx'
import classes from './ng-class.module.scss'

const AppNgClass = () => {
  const isYellowGreen = true

  return (
    <>
      <h4>NgClass</h4>

      <p
        className={clsx({
          [classes.yellowGreen]: isYellowGreen
        })}
      >
        Message in yellowgreen
      </p>
    </>
  )
}

export default AppNgClass
