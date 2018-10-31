import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'
import Contact from './Contact'
import Privacy from './Privacy'
import Terms from './Terms'
import { navigateTo } from 'gatsby-link'

class Main extends React.Component {
  render() {
    const close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )
    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/*--------------------------------------------------------------------------------------------------*/}
        <article
          id="Start"
          className={`${this.props.article === 'Start' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <Img
            className={styles.rightImg}
            resolutions={this.props.image2.resolutions}
          />
          <div>
            <h3 className="major">Start Here</h3>

            <div className={styles.clear}>
              <h4>What we can do for you</h4>
              Since applying for Social Security disability benefits can be a
              difficult process, a disability attorney or advocate may increase
              your chances of being awarded benefits by helping accurately and
              favorably complete the complex paperwork, ensuring that all
              deadlines are met, and providing you with representation at a
              hearing. Either complete our online webform or come into one of
              our locations so we can go over your eligibility at{' '}
              <strong>no</strong> charge. Disability attorneys and advocates
              receive compensation if you are awarded back benefits. We have no
              affiliation with the Social Security Administration, the agency at
              which you can apply for Social Security disability at no cost.
              With millions of Americans applying for Social Security disability
              benefits every year, it is increasingly difficult for disabled
              individuals to receive a favorable decision from the SSA regarding
              their disability claims. In recent years,{' '}
              <strong>denial rates have climbed to well over 60%</strong> for
              the initial application stage, leaving applicants unsure of their
              options and unprepared to further pursue a claim for the benefits
              that they rightfully deserve.{' '}
              <strong>
                You may be eligible to receive up to $2,788/month{' '}
              </strong>{' '}
              (2018 max Social Security benefit amount). Social Security
              Programs Social Security Disability Insurance (SSDI) and
              Supplemental Security Income (SSI) are the two largest Federal
              assistance programs that offer financial support to people with
              disabilities. To find out if you are eligible, please fill out our
              webform or contact our offices.
              <h4>Application Process</h4>
              You can file your initial claim for disability benefits either
              online, over the phone or in person at your local Social Security
              Field Office.
              <strong> Over 60% of initial claims are denied.</strong> Hiring a
              disability lawyer improves your chances of winning your Social
              Security disability claim, whether you've already applied and been
              denied or you have yet to file your initial disability
              application. In a system where 70% of all disability claims are
              denied at the initial application level, it's important to use all
              the resources at your disposal to win your claim at the disability
              hearing, where you have the best chance of getting approved.
              <h4>Appeals Process</h4>
              Most successful Social Security disability claims are won during
              the appeals process. And statistics show that disability claimants
              who are represented by attorneys at the hearing level are twice as
              likely to be approved as claimants who go to their hearing without
              legal representation. An experienced attorney knows the
              requirements you need to meet to get approved for your specific
              medical condition and can arrange for you to take the appropriate
              the medical tests in time for your hearing. An attorney will also
              help you prepare to give testimony at your hearing about your
              medical condition. If you've already been in front of an
              administrative law judge (ALJ) and were denied benefits, an
              attorney can help you take your claim to the next level of appeal
              (the Appeals Council), and even to the final level of appeal
              (federal court). Pay Attention to the Appeal Deadline After you
              receive your decision letter from Social Security, you have 60
              days to file a request for reconsideration (the first level of
              appeal in most states) or for an ALJ hearing. If you fail to
              request a hearing within the time limit, you'll have to start over
              at the beginning by filing a new disability claim. And since your
              best chance of winning is at the ALJ hearing, you don't want to
              pass up this chance by missing the deadline.
              <h4>Eligibility for Social Security Disability Benefits</h4>
              To qualify for Social Security disability, you must meet two sets
              of eligibility requirements. First, you must be found medically
              eligible for benefits—that is, Social Security must find that
              you're too physically or mentally disabled to work a full-time
              job. (Also, you must not be working a significant amount of time
              when you apply.) Second, you must have either worked enough years
              to be "insured" under the Social Security Disability Insurance
              (SSDI) program or you must have very low income and assets to
              qualify for the Supplemental Security Income (SSI) program.
            </div>
          </div>
          {close}
        </article>
        {/*--------------------------------------------------------------------------------------------------*/}
        <article
          id="Evaluation"
          className={`${this.props.article === 'Evaluation' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <Img
            className={styles.rightImg}
            resolutions={this.props.image1.resolutions}
          />
          <div>
            <h3 className="major">Evaluation</h3>

            <div className={styles.clear}>
              <p>
                <strong>Online Fillable Questionaire</strong>
              </p>
              <p>Also a thumbnail link to a printable version</p>
            </div>
          </div>

          <div onClick={() => window.print()}>
            <Img resolutions={this.props.imagePO.resolutions} />
          </div>

          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Forms"
          className={`${this.props.article === 'Forms' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">Legal Forms</h3>

            <div className={styles.flexContainer}>
              {/*-- Flex Container --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.image1.resolutions}
                />
                <div className={styles.clear}>
                  <h4>HA-1560</h4>
                  <ul>
                    <li>What it's for</li>
                    <li>What esle it's for</li>
                  </ul>
                </div>
              </div>
              {/*-- Flex Item --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.image2.resolutions}
                />
                <div className={styles.clear}>
                  <h4>HA-1561</h4>
                  <ul>
                    <li>What it's for</li>
                    <li>What esle it's for</li>
                  </ul>
                </div>
              </div>
              {/*-- Flex Item --*/}
            </div>
            {/*-- Flex Container --*/}
          </div>
          {/*-- Article --*/}
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="About"
          className={`${this.props.article === 'About' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {/*-- Article --*/}
          <div>
            <h3 className="major">Perez y Altieri</h3>
            <Img
              className={styles.leftImg}
              resolutions={this.props.imagePY.resolutions}
            />
            <div className={styles.clear}>
              <p>
                <strong>Perez y Altieri</strong> began it's roots in 1777 when
                old man Gely said WELL FUCK IT!
              </p>
            </div>
          </div>

          <div>
            <Img
              className={styles.rightImg}
              resolutions={this.props.imagePR.resolutions}
            />
            <div className={styles.clear}>
              <p>
                On the exotic island of Puerto Rico, now destroyed beyond
                recognition.
              </p>
            </div>
          </div>

          <div>
            <Img
              className={styles.leftImg}
              resolutions={this.props.imagePO.resolutions}
            />
            <div className={styles.clear}>
              <p>
                <strong>Nowadays</strong> though, the boss is tired. Soo...
              </p>
            </div>
          </div>

          <div>
            <Img
              className={styles.rightImg}
              resolutions={this.props.imageMom.resolutions}
            />
            <div className={styles.clear}>
              <p>Momma is taking over!</p>
            </div>
          </div>
          {/*-- Article --*/}
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Contact"
          className={`${this.props.article === 'Contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <Contact />
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
      </div>
    )
  }
}

export default Main

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
}
