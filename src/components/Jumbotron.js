/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import Button from './Button'
import wallpaper from '../img/wallpaper.jpg'
import logo from '../img/logo.png'
import ContentRow from './ContentRow'

/**
 * @function Jumbotron
 */
const Jumbotron = () => (
  <div css={JumbotronCSS}>
    <div className="synopsis">
      <img src={logo} />

      <p>
        All he wants to do is leave town and start over. But first, he needs to
        deal with his ex, his new roomie and the enemies who want him dead.
      </p>

      <Button icon="play">Play</Button>
      <Button icon="info-circle">More Info</Button>
    </div>

    <ContentRow bg={false} />
  </div>
)

const JumbotronCSS = css`
  position: relative;
  background-image: url('${wallpaper}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 98vh;
  top: 0;

  .synopsis {
    padding-top: 200px;
    padding-left: 60px;
    max-width: 500px;
    color: white;

    img {
      width: 100%;
    }

    i {
      margin-right: 10.5px;
    }
  }

  .ContentRow {
    position: absolute;
    bottom: 20px;
  }
`
export default Jumbotron
