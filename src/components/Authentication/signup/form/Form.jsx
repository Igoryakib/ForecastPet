import styles from './Form.module.scss';
import FormHeader from './FormHeader';
import Inputs from './Inputs';

const Form = function(){
  return (
    <div className={styles.container}>
      <FormHeader />
      <Inputs />
      
    </div>
  )
}

export default Form
