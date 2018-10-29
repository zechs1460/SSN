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
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Full_Size"
          className={`${this.props.article === 'Full_Size' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">Full Size Tables</h3>

            <div className={styles.clear}>
              <p>
                <strong>I can make good tables! Check em' out! </strong>
                If you love me long time, I can even shine them!
              </p>
            </div>

            <div className={styles.flexContainer}>
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageFS1.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 1</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageFS2.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 2</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageFS3.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 3</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                    <li>Good Point 3</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageFS4.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 4</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                    <li>Good Point 3</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageFS5.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 5</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                    <li>Good Point 3</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageFS6.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 6</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                    <li>Good Point 3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Kid_Size"
          className={`${this.props.article === 'Kid_Size' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">Kid Size Tables</h3>

            <div className={styles.clear}>
              <p>
                <strong>Rawr. </strong>
                Meow.
              </p>
            </div>

            <div className={styles.flexContainer}>
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageKS1.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 1</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageKS2.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 2</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageKS3.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 2</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Chairs"
          className={`${this.props.article === 'Chairs' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">Chairs</h3>

            <div className={styles.clear}>
              <p>
                <strong>Rawr. </strong>
                Meow.
              </p>
            </div>

            <div className={styles.flexContainer}>
              {/*-- Flex Container --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageCh1.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 1</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                  </ul>
                </div>
              </div>
              {/*-- Flex Item --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageCh2.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 2</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
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
          id="Stools"
          className={`${this.props.article === 'Stools' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            {/*-- Article --*/}
            <h3 className="major">Stools</h3>

            <div className={styles.clear}>
              <p>
                <strong>Rawr. </strong>
                Meow.
              </p>
            </div>

            <div className={styles.flexContainer}>
              {/*-- Flex Container --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageSt1.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 1</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                  </ul>
                </div>
              </div>
              {/*-- Flex Item --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageSt2.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 2</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                  </ul>
                </div>
              </div>
              {/*-- Flex Item --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageSt3.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 2</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                  </ul>
                </div>
              </div>
              {/*-- Flex Item --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageSt4.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 2</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                  </ul>
                </div>
              </div>
              {/*-- Flex Item --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageSt5.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 2</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
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
          id="Stands"
          className={`${this.props.article === 'Stands' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            {/*-- Articles --*/}
            <h3 className="major">Stands</h3>
            <div className={styles.clear}>
              <p>
                <strong>Rawr. </strong>
                Meow.
              </p>
            </div>

            <div className={styles.flexContainer}>
              {/*-- Flex Container --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageSta1.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 1</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                  </ul>
                </div>
              </div>
              {/*-- Flex Item --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageSta2.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 2</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                  </ul>
                </div>
              </div>
              {/*-- Flex Item --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageSta3.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 3</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
                  </ul>
                </div>
              </div>
              {/*-- Flex Item --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageSta4.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Type 4</h4>
                  <ul>
                    <li>Good Point 1</li>
                    <li>Good Point 2</li>
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
          id="Other"
          className={`${this.props.article === 'Other' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            {/*-- Article --*/}
            <h3 className="major">Other Products</h3>

            <div className={styles.flexContainer}>
              {/*-- Flex Container --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageOt1.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Easels</h4>
                </div>
              </div>
              {/*-- Flex Item --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageOt2.resolutions}
                />
                <div className={styles.clear}>
                  <h4>PS4 Stands</h4>
                </div>
              </div>
              {/*-- Flex Item --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageOt6.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Benches</h4>
                </div>
              </div>
              {/*-- Flex Item --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageOt4.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Phone Stands</h4>
                </div>
              </div>
              {/*-- Flex Item --*/}
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageOt7.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Chests</h4>
                </div>
              </div>
              {/*-- Flex Item --*/}
            </div>
            {/*-- Flex Container --*/}

            <p>
              And anything else you need, <strong>just ask!</strong>
            </p>

            <Img
              className={styles.leftImg}
              resolutions={this.props.imageOt5.resolutions}
            />
            <Img
              className={styles.rightImg}
              resolutions={this.props.imageOt3.resolutions}
            />
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
          <div>
            {/*-- Article --*/}
            <h3 className="major">About Us</h3>

            <div className={styles.clear}>
              <Img
                className={styles.leftImg}
                resolutions={this.props.imageAb1.resolutions}
              />
              <p>I kick ass! Buy my stuff!</p>
            </div>

            <div className={styles.clear}>
              <Img
                className={styles.rightImg}
                resolutions={this.props.imageAb2.resolutions}
              />
              <p>
                I look good doing it too, sometimes swamp ass can be a problem
                though.
              </p>
            </div>

            <div className={styles.clear}>
              <Img
                className={styles.rightImg}
                resolutions={this.props.imageAb4.resolutions}
              />
              <p>I know how to handle my tools. Watch as I sand stuff!</p>
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
        <article
          id="Privacy"
          className={`${this.props.article === 'Privacy' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <Privacy />
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Terms"
          className={`${this.props.article === 'Terms' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <Terms />
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
