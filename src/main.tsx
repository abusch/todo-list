import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { theme} from '@chakra-ui/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
