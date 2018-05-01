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
                        Claudio Dental Lab
                    <br />
                        Tel: (912) 654-1001 &nbsp;&nbsp;&nbsp;&nbsp;
                        Fax: (912) 654-1011
                    <br />
                        13918 GA Hwy-169, Glennville, GA 30427
                    </strong>
                </p>

                <form method="post" action="#">
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
                        <textarea name="message" id="message" rows="4"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Reset" /></li>
                    </ul>
                </form>

                <ul className="icons">
                    <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
                </ul>

            </div>
        )
    }
}
