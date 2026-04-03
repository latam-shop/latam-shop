import { Button } from '@/components/atoms/button/button'
import classes from './login.module.css'
import Card from '@/components/atoms/card/card'

export default function LoginTemplate() {
  return (
    <div className={classes.container}>
      page Login

      <Card classContainer='w-xl h-xl'>
        <Button
          title="Aceptar"
          className={classes.buttonContainer}
          variant='primary'
          disabled={false}
        />
        <div>hola</div>
      </Card>
    </div>
  )
}