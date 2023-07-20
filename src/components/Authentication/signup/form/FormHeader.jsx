import Heading from '../small components/Heading';
import styles from './FormHeader.module.scss';
import { useState } from 'react';

const FormHeader = function(){
  const [isClient, setIsClient] = useState(false)


  return (
    <div className={styles.container}>
      <Heading>{isClient ? 'Увійди в свій акаунт' : 'Зареєструйся'}</Heading>
      <div className={styles.subheading}>
        <p>вже маєш акаунт?</p>
        <div value={isClient} className={styles.clientButton} onClick={() => setIsClient(i => !i)}>
          <span className={styles.active} style={isClient ? {right: '0.4rem', width: '5.2rem'} : {left: '0.4rem', width: '4.2rem'}} >&nbsp;</span>
          <span>Ні</span>
          <span>Так</span>
        </div>
      </div>
    </div>
  )
}

export default FormHeader



