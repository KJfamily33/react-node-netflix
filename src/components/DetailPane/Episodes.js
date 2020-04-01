/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import ContentBlock from '../ContentBlock'
import Icon from '../Icon'

import one from '../../img/one.jpg'
import two from '../../img/two.jpg'
import three from '../../img/three.jpg'
import four from '../../img/four.jpg'

const EPISODES = [one, two, three, four]

/**
 * @function Episodes
 */
const Episodes = () => (
  <div css={EpisodesCSS}>
    {EPISODES.map((episode, i) => (
      <div className="block-wrapper" key={episode}>
        <ContentBlock img={episode}>
          <Icon type="play" />
        </ContentBlock>

        <p>Episode {i}</p>

        <p>
          This engaging documentary series shares the surprising backstories of
          familiar institutions like the Pentagon, West Point and the Playboy
          Mansion.
        </p>
      </div>
    ))}
  </div>
)

const EpisodesCSS = css`
  display: flex;
  width: 100%;

  .block-wrapper {
    width: calc(25% - 60px);
    margin-right: 60px;

    .ContentBlock {
      height: 10vw;
    }

    p:first-of-type {
      color: white;
      font-weight: bold;
    }

    p {
      color: #999;
    }
  }

  img {
    width: 100%;
  }

  p {
    font-size: 14px;
  }

  .Icon.play {
    border: 2px solid white;
    padding: 10px 14px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.4);
    transition: all ease 0.15s;
    font-size: 18px;

    &:hover {
      transform: scale(1.15);
      background: rgba(0, 0, 0, 0.4);
    }
  }
`

export default Episodes
