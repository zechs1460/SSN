import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'

export default class Main extends React.Component {
  render() {
    const close = <div className="close" onClick={() => {
      this.props.onCloseArticle()
    }}></div>
    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        {/* -------------------------------------------------------------------------- */}
        <article id="Dentures" className={`${this.props.article === 'Dentures' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3 className="major">Dentures</h3>

          {close}
      </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="Partials" className={`${this.props.article === 'Partials' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3 className="major">FRS&nbsp;Partials</h3>
          {close}
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="CrownAndBridge" className={`${this.props.article === 'CrownAndBridge' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3 className="major">Crown & Bridge</h3>
          {close}
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="Cast" className={`${this.props.article === 'Cast' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3 className="major">Cast Metal Frames</h3>
          {close}
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="Other" className={`${this.props.article === 'Other' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3 className="major">Other Products</h3>

          {close}
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="Digital" className={`${this.props.article === 'Digital' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3 className="major">Digital</h3>


          {close}
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="About" className={`${this.props.article === 'About' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3 className="major">About Us</h3>

          <div className={styles.clear}>
            <Img className={styles.leftImg} resolutions={this.props.imageAbout1.resolutions}/>
            <p>
            Claudio Dental Laboratory (formally known as Collins Dental Laboratory)
            is owned and managed by Pedro Claudio Jr. CDT. Established in 1948 by Thomas
            Edwards Collins Sr. CDT, the legacy of the founder continues with insistence
            on quality, affordability, prompt and friendly service.
            </p>
          </div>

          <div className={styles.clear}>
            <Img className={styles.rightImg} resolutions={this.props.imageAbout2.resolutions}/>
            <p>
            Pedro&#39;s son Joseph Claudio joins us here at CDL as the Director of the
            Crown and Bridge department. He received his Bachelors in Computer Information
            Systems in 2013, and has been studying Crown and Bridge Dental Technology
            ever since. Having undergone multiple training workshops and seminars, he
            is ready to take full advantage of the inLab software to create the most
            computer accurate and efficient restorations available.
            </p>
          </div>

          <div className={styles.clear}>
            <Img className={styles.leftImg} resolutions={this.props.imageAbout3.resolutions}/>
            <p>
              <strong>
              We firmly believe that communication between the dentist, patient,
              and the specialist involved is key in having happy patients.
              </strong>
            </p>
          </div>

          <div className={styles.clear}>
            <Img className={styles.rightImg} resolutions={this.props.imageAbout4.resolutions}/>
            <p>
            We are a state of the art laboratory, certified by South Carolina State
            Board of Dentistry, Southeastern Conference of Dental Laboratories and the
            Toombs Montgomery Chambers of Commerce. Pedro Claudio CDT is also a proud
            member of the Watermelon Creek Baptist Church.
            </p>
          </div>

          {close}
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="Contact" className={`${this.props.article === 'Contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3 className="major">Contact</h3>

          <p>
            <strong>
            Claudio Dental Lab
              <br/>
            Tel: (912) 654-1001 &nbsp;&nbsp;&nbsp;&nbsp;
            Fax: (912) 654-1011
            </strong>
            <br/>
          13918 GA Hwy-169, Glennville, GA 30427
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
          {close}
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="ML" className={`${this.props.article === 'ML' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3>Mailing Labels</h3>

          <p>Please click the image to print out an RX form. Fill out the RX form and send it with the case.</p>

          <div onClick={() => window.print()}>
            <Img resolutions={this.props.imageML.resolutions}/>
          </div>

          {close}
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="RX" className={`${this.props.article === 'RX' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3 className="major">RX Forms</h3>

          <p>Please click the image to print out an RX form. Fill out the RX form and send it with the case.</p>

          <div onClick={() => window.print()}>
            <Img resolutions={this.props.imageRX.resolutions}/>
          </div>

          {close}
        </article>
        {/* -------------------------------------------------------------------------- */}
       </div>
    )
  }
}

Main.propTypes = {
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}
