import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <h3 className="major">Contact</h3>
        <p>
          <strong>
            Shannon Douglass
            <br />
            <br />
            <span className="icon alt fa-phone">&nbsp;</span>
            Tel: (XXX) XXX-XXXX &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="icon alt fa-envelope">&nbsp;</span>
            Email: XXX@XXX.com
            <br />
            <br />
            <span className="icon alt fa-home">&nbsp;</span>
            XXX XXX, Le Roy, NY 14482
          </strong>
        </p>

        <form
          name="contact"
          method="post"
          action="/ThankYou"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half first">
            <label htmlFor="name">Phone</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" className="special" />
            </li>
          </ul>
        </form>

        <ul className="icons">
          <li>
            <a href="#" className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/pages/Claudio-Dental-Laboratory/508003735999660"
              className="icon fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zechs1460/ShannonsTables"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
