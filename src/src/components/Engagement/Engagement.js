import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledEngagement = styled.section`
  page-break-inside: avoid;
  min-height: 8rem;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  > div:nth-of-type(1) {
    float: left;
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0.25rem;
    width: 96px;
    background-color: white;
    border-radius: 4px;
    > a {
      display: block;
      width: 100%;
      height: 96px;
      img {
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
        border-radius: 4px;
      }
    }
    > img {
      display: block;
      width: 100%;
      height: 96px;
      border: 0;
      border-radius: 4px;
    }
    p {
      text-align: center;
      color: rgb(204, 204, 204);
    }
    a + p, img + p {
      margin-top: 0.5rem;
      font-size: 0.8rem;
      // background-color: green;
    }
  }
  > div:nth-of-type(2) {
    margin-left: calc(96px + 1.5rem);
    p:first-child {
      margin-top: 0.25rem;
    }
    h1 {
      font-size: 1.25rem;
      line-height: 1.25rem;
      color: rgb(96, 96, 96);
      letter-spacing: -0.5px;
      margin-top: 0.75rem;
      // background-color: green;
      > strong {
        display: block;
      }
      > strong > span {
        display: block;
        margin-top: 0.25rem;
        margin-bottom: 0.75rem;
        color: rgb(204, 204, 204);
      }
    }
    p {
      font-size: 0.8rem;
      line-height: 1rem;
      letter-spacing: 0.2px;
      color: rgb(48, 48, 48);
      // background-color: red;
    }
    h1 + p {
      margin-top: 0.5rem;
    }
    p + a {
      margin-top: 1rem;
    }
    p + p {
      margin-top: 0.5rem;
    }
    a + a {
      margin-top: 0.5rem;
    }
  }
`

const Engagement = ({ children, backgroundColor }) => (
  <StyledEngagement style={{ backgroundColor }}>
    {children}
  </StyledEngagement>
)

Engagement.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Engagement.defaultProps = {
  backgroundColor: 'rgb(255, 255, 255)'
}

export default Engagement
