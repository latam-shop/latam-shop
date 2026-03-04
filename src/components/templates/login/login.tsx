import { Buttom } from '@/components/atoms/button/button'
import classes from './login.module.css'

export default function LoginTemplate() {
  return (
    <div className={classes.container}>
      page Login
      <Buttom
        title="Aceptar"
        className={classes.buttonContainer}
        variant='primary'
        disabled={true}
      />
    </div>
  )
}