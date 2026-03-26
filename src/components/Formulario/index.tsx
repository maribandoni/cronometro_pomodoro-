import styles from './styles.module.css';
export function Formulario() {
    return (
        <>
            <form action="">
                <div className={styles.logo}>
                    <label htmlFor="">TASK</label>
                    <input id='meuInput' type="text" />
                </div>
                <div>
                    linha verde
                </div>
                <div>
                    <p>Ciclos</p>
                </div>
                <button>Enviar</button>
            </form>

        </>
    )
}