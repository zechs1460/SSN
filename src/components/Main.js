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
          <p>
            <strong>We offer different package for dentures: </strong>
          </p>
          <div className={styles.flexContainer}>
            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imagedenture1.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>Premium Denture: </strong>
                  <ul>
                    <li>familiar American and European molds with full-body anatomy</li>
                    <li>broad posterior occlusal tables and excellent wear resistance</li>
                    <li>natural characterization to make the denture lifelike</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imagedenture2.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>Custom Denture: </strong>
                  <ul>
                    <li>standard-anatomy, vacuum-fired, and good-wear resistant teeth</li>
                    <li>Package Includes a free trying and free shipping</li>
                    <li>Lucitone ® 199 Acrylic</li>
                    <li>Classic Teeth</li>
                    <li>Lincoln Dual Form V</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.flexItems}>
              <Img className={styles.leftImg} resolutions={this.props.imagedenture3.resolutions}/>
              <div className={styles.clear}>
                <p>
                  <strong>Economy Denture: </strong>
                  <ul>
                    <li>Transitional or standard dentures</li>
                    <li>two layer acrylic teeth</li>
                    <li>aesthetic and affordability shades</li>
                    <li>Overnight services available*</li>
                    <li>can provide Titanium Bars for implant cases</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.clear}>
            <p>
              Overnight rush services available. Please call to inquire.
            </p>
          </div>
          <p>
            We can inject with Lucitone ® 199, Nature-Cryl Pour and conventional
            flask any case. We are constantly reviewing the proper protocol for limiting
            cross-contamination in accordance with <a href="http://www.cdc.gov/hai/prevent/prevent_pubs.html">infection control
            guidelines</a> developed by the centers for Disease Control, American Dental
            Association, and OSHA. We provide &quot;safe-t-bags&quot; to help prevent
            cross-contamination of shipping boxes and packing materials.
          </p>
          <p>
            We send an invoice with every case.&nbsp; Statements are sent on the
            1st of the month.&nbsp; If you require a month ending differently, please
            let us know. We can provide a 30-day billing cycle of your choice.&nbsp;
            Initially, we must have a credit card on file. The first case will be charged
            to your card.&nbsp; After the first case, you will be placed on a monthly
            billing as long as we have the credit card on file.&nbsp; You may pay by
            check or call to have your balance placed on your card.
          </p>
          <Img className={styles.rightImg} resolutions={this.props.imagedenture4.resolutions}/>
          <p>
            Please let us know if other arrangements are needed.
          </p>
          <p>
            Ground shipping is free. There is a $25.00 fee on all rush orders.
          </p>
          {close}
        </article>
                {/* -------------------------------------------------------------------------- */}
                <article id="Partials" className={`${this.props.article === 'Partials' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
                <h3 className="major">FRS&nbsp;Partials</h3>
                <Img className={styles.leftImg} resolutions={this.props.imagePartial1.resolutions}/>
                <Img className={styles.rightImg} resolutions={this.props.imagePartial2.resolutions}/>
                <div className={styles.clear}>
                  <p>
                    The most important procedure is the preliminary or diagnostic cast. The cast must be surveyed and then designed for a removable partial denture. This preliminary survey and design will form a basis for restorative treatment of abutment teeth and will indicate to the technician certain procedures that may need to be completed before a final impression is made.
                  </p>
                </div>
      
                <Img className={styles.rightImg} resolutions={this.props.imagePartial3.resolutions}/>
                <strong className={styles.paddingTop}>We have three packages: </strong>
                <ul className={styles.paddingBottom}>
                  <li>Premium</li>
                  <li>Custom</li>
                  <li>Economy (transitional partials)</li>
                </ul>
      
                <Img className={styles.rightImg} resolutions={this.props.imagePartial4.resolutions}/>
                <strong className={styles.paddingTop}>We have different choices for Partial Dentures: </strong>
                <ul className={styles.paddingBottom}>
                  <li>Acrylic with wrought wire clasps</li>
                  <li>Flexible FRS </li>
                  <li>Cast Metal Vitallium 2000</li>
                  <li>Combo Crown &amp; Bridge </li>
                </ul>
                <Img className={styles.leftImg} resolutions={this.props.imagePartial5.resolutions}/>
                <Img className={styles.rightImg} resolutions={this.props.imagePartial6.resolutions}/>
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
