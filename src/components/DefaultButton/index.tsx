import styles from './styles.module.css'

type DefaultButtonProps ={
     icon:React.ReactNode;
    color?: "green"|"red"
   
}&React.ComponentProps<'button'>;

export function DefaultButton({
    icon,
    color = 'green'
}:DefaultButtonProps){
    return(
         <>
        <div className= {styles.teste}> 
            <button className={`${styles.button} ${styles[color]}`} >{icon}</button>
        </div>
    </>
    )
}