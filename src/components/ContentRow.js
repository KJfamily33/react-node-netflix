/** @jsx jsx */
import React, { useState, useCallback } from 'react'
import { css, jsx } from '@emotion/core'

import one from '../img/1.jpg'
import two from '../img/2.jpg'
import three from '../img/3.jpg'
import four from '../img/4.jpg'
import five from '../img/5.jpg'
import six from '../img/6.jpg'

const ContentRow = ({ bg }) => {
  const [nav, setNav] = useState(false)

  const handleNav = useCallback(() => {
    nav ? setNav(false) : setNav(true)
  }, [nav])

  return (
    <div
      className="ContentRow"
      css={css`
        display: flex;
        width: 100%;
        position: relative;
        background: ${bg ? '#151515' : 'none'};
        padding-left: 60px;
        ${bg && 'margin: 60px 0;'}

        h2 {
          color: white;
          margin: 0;
        }

        h2.row-title {
          position: absolute;
          top: -40px;
        }

        .nav {
          position: absolute;
          right: 0;
          height: 100%;
          width: 5%;
          background: ${nav ? 'rgba(0, 0, 0, 0.6)' : 'none'};
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          i {
            color: white;
            padding-left: 8px;
          }
        }
      `}
    >
      <h2 className="row-title">Title</h2>

      {[one, two, three, four, five, six].map((img, i) => (
        <div
          css={css`
            position: relative;
            flex: calc(19% - 4px);
            flex-shrink: 0;
            height: 130px;
            margin-right: 4px;
            transition: all ease 0.25s;
            z-index: 99;

            &:hover {
              transform: scale(1.3);
              cursor: pointer;
              z-index: 199;
            }

            .content {
              position: absolute;
              z-index: -10;
              padding: 20px;
            }

            img {
              height: 100%;
              width: 100%;
              z-index: -20;
            }
          `}
          onMouseEnter={() => {}}
        >
          <div>
            <div className="content">
              <h2>Yolo</h2>
            </div>
            <img key={i} src={img} />
          </div>
        </div>
      ))}

      <div className="nav" onMouseEnter={handleNav} onMouseLeave={handleNav}>
        {nav && <i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>}
      </div>
    </div>
  )
}

ContentRow.defaultProps = {
  bg: true
}

export default ContentRow
