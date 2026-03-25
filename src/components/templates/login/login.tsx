import { Button } from '@/components/atoms/button/button'
import { Icon } from '@/components/Icons/icon' 

import classes from './login.module.css'

export default function LoginTemplate() {
  return (
  <div className="flex gap-6">
    <div className={classes.container}>
      page Login
      <Button
        title="Aceptar 1"
        className={classes.buttonContainer}
        variant='primary'
        disabled={false}
      />
    </div>

    <div className={classes.container2}>
      page Login
      <Button
        title="Aceptar 2"
        className={classes.buttonContainer2}
        variant='secondary'
        disabled={false}
      />
    </div>

        <div className={classes.container3}>
      page Login
      <Button
        title="Aceptar 3"
        className={classes.buttonContainer3}
        variant='secondary'
        disabled={false}
      />
            


    </div>
    <Icon/>
  </div>
  
)
}