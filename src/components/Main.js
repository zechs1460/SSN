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
        <div>  
        <h3 className="major">Dentures</h3>
          <p>
            <strong>We offer different package for dentures: </strong>
          </p>
          <div className={styles.flexContainer}>

          </div>

          {close}
          </div>
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="Partials" className={`${this.props.article === 'Partials' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <div>  
        <h3 className="major">FRS&nbsp;Partials</h3>
          <Img className={styles.leftImg} resolutions={this.props.imagePartial1.resolutions} />
          <Img className={styles.rightImg} resolutions={this.props.imagePartial2.resolutions} />
          <div className={styles.clear}>
            <p>
              The most important procedure is the preliminary or diagnostic cast. The cast must be surveyed and then designed for a removable partial denture. This preliminary survey and design will form a basis for restorative treatment of abutment teeth and will indicate to the technician certain procedures that may need to be completed before a final impression is made.
            </p>
          </div>

          <Img className={styles.rightImg} resolutions={this.props.imagePartial3.resolutions} />
          <strong className={styles.paddingTop}>We have three packages: </strong>
          <ul className={styles.paddingBottom}>
            <li>Premium</li>
            <li>Custom</li>
            <li>Economy (transitional partials)</li>
          </ul>

          <Img className={styles.rightImg} resolutions={this.props.imagePartial4.resolutions} />
          <strong className={styles.paddingTop}>We have different choices for Partial Dentures: </strong>
          <ul className={styles.paddingBottom}>
            <li>Acrylic with wrought wire clasps</li>
            <li>Flexible FRS </li>
            <li>Cast Metal Vitallium 2000</li>
            <li>Combo Crown &amp; Bridge </li>
          </ul>
          <Img className={styles.leftImg} resolutions={this.props.imagePartial5.resolutions} />
          <Img className={styles.rightImg} resolutions={this.props.imagePartial6.resolutions} />
          {close}
          </div>
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="CrownAndBridge" className={`${this.props.article === 'CrownAndBridge' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3 className="major">Crown & Bridge</h3>

          <div className={styles.clear}>
            <p>
              <strong>Our In-house milling system allows us to create, mill, finish, and return IPS e.max CAD crowns in 3 days, and Zirconia crowns in 5 days. </strong>
            Our partnership with DENTSPLY allows us to offer a wide variety of services normally to difficult to obtain.
            </p>
          </div>

          <div className={styles.flexContainer}>

            
          </div>

            <p>
              <a href="https://www.dentsplysirona.com/en-us">DENTSPLY Prident</a> is an ISO 9001
            certified laboratory and a wholly owned subsidiary of DENTSPLY International,
            Inc. DENTSPLY Prident guarantees that the materials used in the finished
            medical device produced at DENTSPLY Prident are cleared by the FDA and are
            legally distributed in the US.
            </p>
            <p>
            The Turn-around Time is less than 15 days for the following:

              <ul>
                <li>PFM</li>
                <li>Captek ™ </li>
                <li>All-Ceramic &#xAE;</li>
                <li>Radica </li>
                <li>Cercon &#xAE; </li>
              </ul>
            </p>

          <Img className={styles.leftImg} resolutions={this.props.imageCrownAndBridge1.resolutions}/>
          <Img className={styles.rightImg} resolutions={this.props.imageCrownAndBridge3.resolutions}/>

          {close}
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="Cast" className={`${this.props.article === 'Cast' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3 className="major">Cast Metal Frames</h3>

          <Img className={styles.leftImg} resolutions={this.props.imageCast1.resolutions}/>
          <Img className={styles.rightImg} resolutions={this.props.imageCast2.resolutions}/>

          <div className={styles.clear}>
            <p>
            The metal framework does not contact the gums. Thus, as the gums resorb,
            this type of partial does not sink with them and rarely requires relines.
            Because the teeth are altered by the dentist beforehand, there are fewer
            limitations in the placement of clasps, and they are less likely to be seen
            than the wrought wire clasps of the treatment partial. Modern frameworks
            are cast from an extremely strong alloy called chrome cobalt which can be
            cast very thin and are much less likely to break than the all plastic variety.
            They are also much less noticeable to the tongue.
            </p>
          </div>
          <ul>
            <li>Vitallium &#xAE; 2000 Metal</li>
            <li>Dentures come in Economy, Premium, or Custom deals</li>
            <li>Product of Glidewell</li>
            <li>In Vita A1 - D4 Shade</li>
          </ul>
          <p>
          The largest single advantage that cast metal framework partial dentures
          have over the newer flexible framework partials is that sore spots are almost
          never an issue since neither the framework, nor the plastic extensions contact
          the soft oral tissues with any force! Patients who exhibit the symptoms
          of TMJ, or who are known bruxers are much better off with cast metal partials
          than with flexible framework partials.
          </p>

          <Img className={styles.leftImg} resolutions={this.props.imageCast3.resolutions}/>
          <Img className={styles.rightImg} resolutions={this.props.imageCast4.resolutions}/>

          {close}
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="Other" className={`${this.props.article === 'Other' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3 className="major">Other Products</h3>

          <div className={styles.flexContainer}>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imageOther1.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>Abutments</strong>
                  <ul>
                    <li>Patient-Specific abutments</li>
                    <li>For perfect fitting, everytime</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imageOther2.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>Nightguards</strong>
                  <ul>
                    <li>X</li>
                    <li>X</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imageOther3.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>Wax patterns</strong>
                  <ul>
                    <li>X</li>
                    <li>X</li>
                    <li>X</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imageOther4.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>Study Models</strong>
                  <ul>
                    <li>X</li>
                    <li>X</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imageOther5.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>PFMs</strong>
                  <ul>
                    <li>X</li>
                    <li>X</li>
                    <li>X</li>
                  </ul>
                </p>
              </div>
            </div>

          </div>

          <p>And anything else you need, <strong>just ask!</strong></p>

          {close}
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="Digital" className={`${this.props.article === 'Digital' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h3 className="major">Digital</h3>

          <p>
          With our digital equipment and in-house milling system, we can efficiently
          and accurately create fully anatomical crowns and bridges as well as
          veneers, and inlays/onlays.
          </p>

          <div className={styles.flexContainer}>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imageDigital1.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>Digital Scanning</strong>
                  <ul>
                    <li>
                      <p>Precise and efficient scans make your ending products accurate</p>
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imageDigital2.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>Natural Esthetics</strong>
                  <ul>
                    <li>Beautiful and Natural look</li>
                    <li>Designs based off surrounding dentition</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imageDigital3.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>Virtual Try-In</strong>
                  <ul>
                    <li>
                      <p>3D-generated Patient Pictures allows facial features to be taken into account</p>
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imageDigital4.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>Virtual Articulation</strong>
                  <ul>
                    <li>
                    Virtual Articulation allows us to easily determine contact surfaces
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imageDigital5.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>Inlay/Onlay and Veneers</strong>
                  <ul>
                    <li>
                    Anything you need, we can make!
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imageDigital6.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>Crown and Bridge</strong>
                  <ul>
                    <li>Full Contour or copings</li>
                    <li>
                    IPS e.max, inCoris TZI/ZI (BruxZir), Lava, VITABLOCS, and many more!
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imageDigital7.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>In-House Milling</strong>
                  <ul>
                    <li>
                    We mill it all right here so you get your case back ASAP!
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imageDigital8.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>CEREC Connect</strong>
                  <ul>
                    <li>
                    Finally go model free and send us digital scans for the best results!
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

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
