import styles from './CtaButton.module.scss';

const CtaButton = function({ children, onClick }){
  return (
    <button onClick={onClick} className={styles.btn} >
      {children}
    </button>
  )
}

export default CtaButton
