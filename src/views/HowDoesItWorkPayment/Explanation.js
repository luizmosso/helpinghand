import React, { useEffect } from 'react'
import { 
  Explain,
  FromRight
} from './style'

export default function Explanation({ finished }){

  useEffect(() => { 
    finished()
  }, [])

  return (
    <FromRight width="80%">
      <Explain>
        Os ajudantes são apoiados por instituições de ação social. <br/><br/>
        Mãos amigas com vontade de trabalhar em busca de oportunidades. 
      </Explain>
    </FromRight>
  )
}