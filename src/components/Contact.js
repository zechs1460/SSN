import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <h3 className="major">Contact Us</h3> 
        <p>
          <strong>
            Perez y Altieri Office
            <br />
            <br />
            <span className="icon alt fa-home">&nbsp;</span>
            M-1 ....
            IN ORLANDO
            ...
            <br />
            <span className="icon alt fa-phone">&nbsp;</span>
            (787) XXX-XXXX &nbsp;&nbsp;&nbsp;&nbsp;
            IN ORLANDO ...
            .....
            
            {/*
            Removing email for SPAM reasons
             <br />
            <span className="icon alt fa-envelope">&nbsp;</span>
            atsuro4me@yahoo.com
            */}
            
          </strong>
        </p>

        <form
          name="Contact"
          method="POST"
          action="/."
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
            <label htmlFor="message">Message (Tell us about you)</label>
            <textarea name="message" id="message" rows="4" />
            Age, reinforce NOT to give ur SSN number to anyone!
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
            <a
              href="https://www.facebook.com/"
              className="icon fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zechs1460/SSN"
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