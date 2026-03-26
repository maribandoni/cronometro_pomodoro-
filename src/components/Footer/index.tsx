import styles from './styles.module.css';
import { Copyright } from 'lucide-react';   
export function Footer(){
   return (
    <>
    <footer className={styles.footer}>
      <a href=""> Enenda como funciona a técnica pomodoro</a>
      <a href="">Cronometro Pomodoro
        <Copyright/> {new Date().getFullYear()} - Feito com ♥</a>
    </footer>
    </>
   );
}