import { Button } from '@/components/atoms/button/button'
import classes from './login.module.css'

export default function LoginTemplate() {
  return (
    <div className={classes.container}>
      page Login
      <Button
        title="Aceptar"
        className={classes.buttonContainer}
        variant='primary'
        disabled={false}
      />
    </div>
  )
}