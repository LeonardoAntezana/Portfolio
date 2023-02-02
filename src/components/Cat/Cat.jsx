import styles from './Cat.module.scss'

function Cat({ state }) {
  return (
    <div className={styles.container__gato}>
        <div className={styles.cara}>
            <div className={styles.ojos}>
                <span className={styles.ojo__left}>
                    <span className={state ? styles.parpado__open : styles.parpado}>
                        <span className={styles.iris}></span>
                    </span>
                </span>
                <span className={styles.ojo}></span>
            </div>
            <div className={styles.nariz}></div>
            <span className={styles.conexion}></span>
            <span className={styles.labio}></span>
            <span className={styles.labio__right}></span>
        </div>
        <div className={styles.orejas}>
            <div className={styles.oreja}></div>
            <div className={styles.oreja__right}></div>
        </div>
        <div className={styles.cuerpo}></div>
        <div className={styles.cola}></div>
        <div className={styles.patas}>
            <div className={styles.pata}>
                <span className={styles.dedo}></span>
                <span className={styles.dedo__right}></span>
            </div>
            <div className={styles.pata__right}>
                <span className={styles.dedo}></span>
                <span className={styles.dedo__right}></span>
            </div>
        </div>
    </div>
  )
}

export default Cat