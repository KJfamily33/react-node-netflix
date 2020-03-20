/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { Global, css, jsx } from '@emotion/core'
import Navbar from './Navbar'
import Footer from './Footer'
import Jumbotron from './Jumbotron'
import ContentRow from './ContentRow'
import Icon from './Icon'

const initialRow = {
  category: '',
  pos: { top: 0, bottom: 0 }
}

const categories = [
  'TV Shows',
  'Action',
  'Drama',
  'Comedy',
  'Documentary',
  'Sci-Fi',
  'Reality'
]

/**
 * @function App
 */
const App = () => {
  const [activeRow, setActiveRow] = useState(initialRow)

  const {
    category,
    pos: { top, bottom }
  } = activeRow

  const setActive = activeRow => {
    activeRow.category ? setActiveRow(activeRow) : setActiveRow(initialRow)
  }

  useEffect(() => {
    if (category) {
      const navHeight = document.querySelector('nav').offsetHeight

      window.scrollTo({
        top: top + window.scrollY - navHeight,
        left: 0,
        behavior: 'smooth'
      })
    }
  }, [category])

  return (
    <>
      <Global styles={GlobalCSS} />
      <Navbar />

      <Jumbotron>
        <ContentRow
          category={categories[0]}
          active={activeRow === categories[0]}
          setActive={setActive}
        />
      </Jumbotron>

      {categories.slice(1).map(category => (
        <ContentRow
          key={category}
          category={category}
          active={activeRow === category}
          setActive={setActive}
        />
      ))}

      {category && (
        <div
          css={css`
            height: 475px;
            background: black;
            width: 100%;
            position: absolute;
            border: 2px solid white;
            top: ${bottom + scrollY}px;
            z-index: 99;

            .Icon {
              font-size: 32px;
              color: white;
              position: absolute;
              right: 20px;
              top: 20px;
              cursor: pointer;
            }
          `}
        >
          <Icon type="times" onClick={setActive} />
        </div>
      )}
      <Footer />
    </>
  )
}

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
