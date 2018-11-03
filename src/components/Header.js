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
              props.onOpenArticle('Start')
            }}
          >
            Start&nbsp;Here
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Evaluation')
            }}
          >
            Web Form
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Forms')
            }}
          >
            Legal Forms
          </a>
        </li>
 
      </ul>
    </nav>
    <div className="content">
      <div className="inner">
        <h6>Perez y Altieri</h6>
      </div>
    </div>
    <nav>
      <ul>
      <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('About')
            }}
          >
            About&nbsp;Us
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Contact')
            }}
          >
            Make&nbsp;Appointment
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
