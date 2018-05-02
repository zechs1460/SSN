import PropTypes from 'prop-types';
import React from 'react'
import Link from 'gatsby-link'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <div>
      <p className="copyright">
        <span className="item">&copy; Copyright Claudio Dental Lab</span>
        &nbsp;
        &#11044;
        &nbsp;
        <Link className="item" to={`/Privacy`}>Privacy Policy</Link>
        &nbsp;
        &#11044;
        &nbsp;
        <Link className="item" to={`/Terms`}>Terms of Use</Link>
      </p>
    </div>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
