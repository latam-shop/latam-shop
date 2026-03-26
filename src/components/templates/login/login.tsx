import { Button } from '@/components/atoms/button/button'

import classes from './login.module.css'
import Icon from '@/components/atoms/Icons/icon';


export default function LoginTemplate() {
  return (
    <div className="flex gap-6">
      <div className={classes.container}>
        <Icon name="rating" size="2xl" color="text-amber-400" />
        page Login
        <Button
          title="Aceptar 1"
          className={classes.buttonContainer}
          variant='primary'
          disabled={false}
        />
      </div>

    </div>

  )
}
