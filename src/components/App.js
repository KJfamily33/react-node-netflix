import React from 'react'
import { Global, css, jsx } from '@emotion/core'
import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import ContentRow from './ContentRow'

/**
 * @function App
 */
const App = () => (
  <>
    <Global styles={GlobalCSS} />
    <Navbar />
    <Jumbotron />

    {Array.from({ length: 6 }).map(el => (
      <ContentRow />
    ))}
  </>
)

const GlobalCSS = css`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  .app {
    margin: 0;
    min-height: 100%;
    width: 100%;
  }

  body {
    background: #151515;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: white;
  }

  p {
    font-size: 20px;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  button {
    background-color: rgba(51, 51, 51, 0.8);
    border: 1px solid white;
    padding: 0.75em 2.3em;
    border-radius: 0.2vw;
    box-shadow: none;
    font-size: 1.1vw;
    color: white;
    margin-right: 15px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.4px;
  }

  i {
    font-size: 18.5px;
  }
`

export default App
