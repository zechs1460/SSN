import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Full_Size')
            }}
          >
            Full&nbsp;Size
          </a>
        </li>
        <div className="divide1" />
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Kid_Size')
            }}
          >
            Kid&nbsp;Size
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Chairs')
            }}
          >
            Chairs
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Stools')
            }}
          >
            Stools
          </a>
        </li>
      </ul>
    </nav>
    <div className="content">
      <div className="inner">
        <h6>Shannon's Tables</h6>
      </div>
    </div>
    <nav>
      <ul>
      <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Stands')
            }}
          >
            Stands
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Other')
            }}
          >
            Other&nbsp;Products
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('About')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
