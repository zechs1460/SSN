import PropTypes from 'prop-types'
import React from 'react'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <div className="copyright">
      <span className="item">&copy; Copyright Claudio Dental Lab</span>
      &nbsp; &#11044; &nbsp;
      <a
        className="item"
        href="javascript:;"
        onClick={() => {
          props.onOpenArticle('Privacy')
        }}
      >
        &copy; Privacy&nbsp;Policy
      </a>
      &nbsp; &#11044; &nbsp;
      <a
        className="item"
        href="javascript:;"
        onClick={() => {
          props.onOpenArticle('Terms')
        }}
      >
        Terms&nbsp;of&nbsp;Use
      </a>
    </div>
  </footer>
)

Footer.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Footer
