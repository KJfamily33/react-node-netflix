/** @jsx jsx */
import React, { useState, useCallback, useEffect } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import Icon from './Icon'

import one from '../img/one.jpg'
import two from '../img/two.jpg'
import three from '../img/three.jpg'
import four from '../img/four.jpg'
import five from '../img/five.jpg'
import six from '../img/six.jpg'

const content = [one, two, three, four, five, six]

/**
 * @function ContentRow
 */
const ContentRow = ({ bg, category, setActive }) => {
  const [hovered, setHovered] = useState(false)

  const handleHover = useCallback(e => {
    e.type === 'mouseenter'
      ? setHovered(e.target.getAttribute('data-img'))
      : setHovered(false)
  }, [])

  const getPos = useCallback(e => {
    const pos = e.target.parentElement.getBoundingClientRect()
    setActive({ category, pos })
  }, [])

  return (
    <div className="ContentRow">
      <div
        css={css`
          padding-left: 60px;

          h2 {
            margin: 20px 0 10px;
            color: white;
          }

          .block-wrapper {
            display: flex;
            width: 100%;
            position: relative;
            background: ${bg ? '#151515' : 'none'};
          }
        `}
      >
        <h2>{category}</h2>

        <div className="block-wrapper">
          {content.map(img => (
            <ContentBlock
              key={img}
              data-img={img}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              {img === hovered && (
                <div className="content">
                  <Icon type="play" />
                  <Icon onClick={getPos} type="info-circle" />
                </div>
              )}

              <img src={img} />
            </ContentBlock>
          ))}
        </div>
      </div>
    </div>
  )
}

const ContentBlock = styled.div`
  position: relative;
  flex: calc(18vw - 4px);
  flex-shrink: 0;
  height: 9.5vw;
  margin-right: 4px;
  z-index: 2;

  &:hover {
    cursor: pointer;
  }

  .content {
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;
    transition: all ease 0.2s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.65);
    }

    .Icon {
      font-size: 32px;
    }

    .Icon:first-of-type {
      color: red;
      margin-right: 25px;
    }

    .Icon:last-of-type {
      color: white;
    }
  }

  img {
    height: 100%;
    width: 100%;
    z-index: 1;
    pointer-events: none;
  }
`

ContentRow.defaultProps = {
  bg: true
}

export default ContentRow
