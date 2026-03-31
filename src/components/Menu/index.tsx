import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import {HistoryIcon, HouseIcon,  SettingsIcon, SunIcon} from 'lucide-react';
type AvaliableThemes = 'dark' | 'light';
export function Menu(){
  const [theme,setTheme]=useState<AvaliableThemes>('dark');
  function handleThemeChange(
    event:React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ){
    event.preventDefault();
    setTheme(prevTheme=>{
      const nextTheme = prevTheme === 'dark'?'light':'dark';
      return nextTheme;
    });
  
  }
  
  useEffect(()=>{
    document.documentElement.setAttribute('data-theme',theme)
    return()=>{
      console.log('O componente está atualizado', Date.now())
    };

  },[theme]);
   return (
    <>
    <nav className={styles.menu}>
      <h1>{theme}</h1>
        <a className={styles.menuLink} href="#"
          aria-label='Ver histórico'
          title='Ver histórico'
         >
          <HistoryIcon/>
          </a>
          <a className={styles.menuLink} href="#"
           aria-label='Ir para home'
          title='Ir para home'
          >
          <HouseIcon/>
          </a>
          <a className={styles.menuLink} href="#"
           aria-label='Configurações'
          title='Configurações'
          >
          <SettingsIcon/>
          </a>
          <a className={styles.menuLink} href="#"
          aria-label='Mudar tema'
          title='Mudar tema'
          onClick={handleThemeChange}
          >
          <SunIcon/>
          </a>
    </nav>
    </>
  )  
}