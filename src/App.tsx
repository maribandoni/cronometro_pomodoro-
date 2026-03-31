import './styles/global.css'
import './styles/theme.css'
import { Heading } from './components/Heading'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
// import {Formulario} from './components/Formulario'
import { Cycles } from './components/Cycles'
import { DefaultInput } from './components/DefaultInput';
import { DefaultButton } from './components/DefaultButton';
// import { CirclePlay, CircleStop } from 'lucide-react';
import { CirclePlay } from 'lucide-react';
import { Footer } from './components/Footer';
import { useState } from 'react'

export function App() {
 
  const [numero, setNumero] = useState(0)
  function handleClick(){
    setNumero(prevState=>prevState+1)
    
  }

  return (
    <>
    <Heading>
      Número: <span id="numero">{numero}</span>
    </Heading>
    <button onClick = {handleClick}
      >Aumenta Número</button>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      {/* <Container>
       <Formulario/>
      </Container> */}
      
  

      <Container>
        <form className="form" action="">
          <div>
            <label htmlFor=""></label>
            {/* <input id="menuInput" type="text" placeholder='Digite algo' /> */}
          </div>
          <div className="formRow">
            <DefaultInput 
             id='menuInput'
             type='text'
            placeholder='Digite sua Task'
            labelText={numero.toString()} />
          </div>
          <div className='formRow'>
            linha verde
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
         <DefaultButton icon= {<CirclePlay/>}  color = 'green'/> 
         {/* <DefaultButton icon= {<CircleStop/>}  color = 'green'/> */}
        </form>
      </Container>

      
          <Container>
        <Footer/>
        
      </Container>
    </>

  )
}















//o return nesse tipo de programação necessia de uma div "vazia" ("<> </>") para fazer todo o html dentro dela, pois o return só pode retornar um elemento, e a div vazia é um elemento que não tem impacto visual, ou seja, não aparece na tela, mas permite que o código dentro dela seja renderizado corretamente. 