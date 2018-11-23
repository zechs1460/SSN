import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <h3 className="major">Web Form</h3>
        <p>
          Fill out everything you can. Once you submit this form, we will
          contact you as soon as possible to let you know you're eligibility{' '}
          <strong>free of charge</strong>.
        </p>
        <form
          name="questionnaire"
          method="post"
          action="/ThankYou"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <h4>Personal Information</h4>
          <div>
            <div className="field OneThenTwoThenthree first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field OneThenTwoThenthree second">
              <label htmlFor="DoB">DoB</label>
              <input type="text" name="DoB" id="DoB" />
            </div>
            <div className="field OneThenTwoThenthree third">
              <label htmlFor="Height">Height</label>
              <input type="text" name="Height" id="Height" />
            </div>
            <div className="field OneThenTwoThenthree third">
              <label htmlFor="Weight">Weight</label>
              <input type="text" name="Weight" id="Weight" />
            </div>
            <div className="field OneThenTwoThenthree first">
              <label htmlFor="Address">Street Address</label>
              <input type="text" name="Address" id="Address" />
            </div>
            <div className="field OneThenTwoThenthree second">
              <label htmlFor="City">City</label>
              <input type="text" name="City" id="City" />
            </div>
            <div className="field OneThenTwoThenthree third">
              <label htmlFor="State">State</label>
              <input type="text" name="State" id="State" />
            </div>
            <div className="field OneThenTwoThenthree third">
              <label htmlFor="ZIP">ZIP</label>
              <input type="text" name="ZIP" id="ZIP" />
            </div>
            <div className="field Fourths first">
              <label htmlFor="CoB">City of Birth</label>
              <input type="text" name="CoB" id="CoB" />
            </div>
            <div className="field Fourths second">
              <label htmlFor="SoB">State of Birth</label>
              <input type="text" name="SoB" id="SoB" />
            </div>
            <div className="field Fourths third">
              <label htmlFor="Phone">Phone</label>
              <input type="text" name="Phone" id="Phone" />
            </div>
            <div className="field Fourths fourth">
              <label htmlFor="email">email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field first">
              <label htmlFor="DoO">Date of Onset</label>
              <input
                type="text"
                name="DoO"
                id="DoO"
                placeholder="Date of Disability, or last day of work"
              />
            </div>
          </div>
          <h4>Education</h4>
          <div>
            <div className="field half first">
              <label htmlFor="Degree">Degree of Formal Education</label>
              <input
                type="text"
                name="Degree"
                id="Degree"
                placeholder="1-12 / AA / BA / MA / DR"
              />
            </div>
            <div className="field half">
              <label htmlFor="Graduation">Year completed</label>
              <input
                type="text"
                name="Graduation"
                id="Graduation"
                placeholder="Graduation Date"
              />
            </div>
          </div>
          <h4>Marriage</h4>
          <div>
            <div className="field Fourths first">
              <label htmlFor="SpouseName">Spouse Name</label>
              <input type="text" name="SpouseName" id="SpouseName" />
            </div>
            <div className="field Fourths second">
              <label htmlFor="SDoB">DoB / Age</label>
              <input type="text" name="SDoB" id="SDoB" />
            </div>
            <div className="field Fourths third">
              <label htmlFor="MDate">Marriage Date</label>
              <input type="text" name="MDate" id="MDate" />
            </div>
            <div className="field Fourths fourth">
              <label htmlFor="CoM">City of Marriage</label>
              <input type="text" name="CoM" id="CoM" />
            </div>
          </div>
          <h4>Prior Marriage</h4>
          <div>
            <div className="field Fourths first">
              <label htmlFor="SpouseName2">Spouse Name</label>
              <input type="text" name="SpouseName2" id="SpouseName2" />
            </div>
            <div className="field Fourths second">
              <label htmlFor="SDoB2">DoB / Age</label>
              <input type="text" name="SDoB2" id="SDoB2" />
            </div>
            <div className="field Fourths third">
              <label htmlFor="MDate2">Marriage Date</label>
              <input type="text" name="MDate2" id="MDate2" />
            </div>
            <div className="field Fourths fourth">
              <label htmlFor="CoM2">City of Marriage</label>
              <input type="text" name="CoM2" id="CoM2" />
            </div>
          </div>
          <h4>Emergency Contact</h4>
          <div>
            <div className="field Thirds first">
              <label htmlFor="EName">Name</label>
              <input type="text" name="EName" id="EName" />
            </div>
            <div className="field Thirds second">
              <label htmlFor="Relation">Relation</label>
              <input type="text" name="Relation" id="Relation" />
            </div>
            <div className="field Thirds third">
              <label htmlFor="EPhone">Phone</label>
              <input type="text" name="EPhone" id="EPhone" />
            </div>
          </div>
          <h4>Minor Children</h4>
          <div>
            <fieldset>
              <label htmlFor="radioMCHide1" className="btn">
                -
              </label>
              <label htmlFor="radioMCShow1" className="btn">
                +
              </label>
            </fieldset>
            <input id="radioMCHide1" className="rad" name="HC1" type="radio" />
            <fieldset className="set">
              <legend />
            </fieldset>
            <input id="radioMCShow1" className="rad" name="HC1" type="radio" />
            <fieldset className="set">
              <legend>
                <div className="field half first">
                  <input
                    type="text"
                    name="CName1"
                    id="CName1"
                    placeholder="Child Name"
                  />
                </div>
                <div className="field half">
                  <input
                    type="text"
                    name="CDoB1"
                    id="CDoB1"
                    placeholder="Child DoB"
                  />
                </div>
              </legend>
              <fieldset>
                <label htmlFor="radioMCHide2" className="btn">
                  -
                </label>
                <label htmlFor="radioMCShow2" className="btn">
                  +
                </label>
              </fieldset>
              <input
                id="radioMCHide2"
                className="rad"
                name="HC2"
                type="radio"
              />
              <fieldset className="set">
                <legend />
              </fieldset>
              <input
                id="radioMCShow2"
                className="rad"
                name="HC2"
                type="radio"
              />
              <fieldset className="set">
                <legend>
                  <div className="field half first">
                    <input
                      type="text"
                      name="CName2"
                      id="CName2"
                      placeholder="Child Name"
                    />
                  </div>
                  <div className="field half">
                    <input
                      type="text"
                      name="CDoB2"
                      id="CDoB2"
                      placeholder="Child DoB"
                    />
                  </div>
                </legend>
                <fieldset>
                  <label htmlFor="radioMCHide3" className="btn">
                    -
                  </label>
                  <label htmlFor="radioMCShow3" className="btn">
                    +
                  </label>
                </fieldset>
                <input
                  id="radioMCHide3"
                  className="rad"
                  name="HC3"
                  type="radio"
                />
                <fieldset className="set">
                  <legend />
                </fieldset>
                <input
                  id="radioMCShow3"
                  className="rad"
                  name="HC3"
                  type="radio"
                />
                <fieldset className="set">
                  <legend>
                    <div className="field half first">
                      <input
                        type="text"
                        name="CName3"
                        id="CName3"
                        placeholder="Child Name"
                      />
                    </div>
                    <div className="field half">
                      <input
                        type="text"
                        name="CDoB3"
                        id="CDoB3"
                        placeholder="Child DoB"
                      />
                    </div>
                  </legend>
                  <fieldset>
                    <label htmlFor="radioMCHide4" className="btn">
                      -
                    </label>
                    <label htmlFor="radioMCShow4" className="btn">
                      +
                    </label>
                  </fieldset>
                  <input
                    id="radioMCHide4"
                    className="rad"
                    name="HC4"
                    type="radio"
                  />
                  <fieldset className="set">
                    <legend />
                  </fieldset>
                  <input
                    id="radioMCShow4"
                    className="rad"
                    name="HC4"
                    type="radio"
                  />
                  <fieldset className="set">
                    <legend>
                      <div className="field half first">
                        <input
                          type="text"
                          name="CName4"
                          id="CName4"
                          placeholder="Child Name"
                        />
                      </div>
                      <div className="field half">
                        <input
                          type="text"
                          name="CDoB4"
                          id="CDoB4"
                          placeholder="Child DoB"
                        />
                      </div>
                    </legend>
                    <fieldset>
                      <label htmlFor="radioMCHide5" className="btn">
                        -
                      </label>
                      <label htmlFor="radioMCShow5" className="btn">
                        +
                      </label>
                    </fieldset>
                    <input
                      id="radioMCHide5"
                      className="rad"
                      name="HC5"
                      type="radio"
                    />
                    <fieldset className="set">
                      <legend />
                    </fieldset>
                    <input
                      id="radioMCShow5"
                      className="rad"
                      name="HC5"
                      type="radio"
                    />
                    <fieldset className="set">
                      <legend>
                        <div className="field half first">
                          <input
                            type="text"
                            name="CName5"
                            id="CName5"
                            placeholder="Child Name"
                          />
                        </div>
                        <div className="field half">
                          <input
                            type="text"
                            name="CDoB5"
                            id="CDoB5"
                            placeholder="Child DoB"
                          />
                        </div>
                      </legend>
                    </fieldset>
                  </fieldset>
                </fieldset>
              </fieldset>
            </fieldset>
          </div>
          <h4>Work History</h4>
          <div>
            <p>(Only jobs in the last 15 years)</p>
            <fieldset>
              <label htmlFor="radioWHHide1" className="btn">
                -
              </label>
              <label htmlFor="radioWHShow1" className="btn">
                +
              </label>
            </fieldset>
            <input id="radioWHHide1" className="rad" name="HC1" type="radio" />
            <fieldset className="set">
              <legend />
            </fieldset>
            <input id="radioWHShow1" className="rad" name="HC1" type="radio" />
            <fieldset className="set">
              <legend>
                <div className="field first">
                  <label htmlFor="Title1">Job Title / Position</label>
                  <input type="text" name="Title1" id="Title1" />
                </div>
                <div className="field first">
                  <label htmlFor="Description1">Description</label>
                  <textarea name="Description1" id="Description1" rows="2" />
                </div>
                <div className="field half first">
                  <label htmlFor="FromTo1">Start and End Dates</label>
                  <input type="text" name="FromTo1" id="FromTo1" />
                </div>
                <div className="field half">
                  <label htmlFor="RoP1">Rate of Pay</label>
                  <input type="text" name="RoP1" id="RoP1" />
                </div>
                <div className="field OneThenTwoThenthree first">
                  <label htmlFor="JAddress1">Street Address</label>
                  <input type="text" name="JAddress1" id="JAddress1" />
                </div>
                <div className="field OneThenTwoThenthree second">
                  <label htmlFor="JCity1">City</label>
                  <input type="text" name="JCity1" id="JCity1" />
                </div>
                <div className="field OneThenTwoThenthree third">
                  <label htmlFor="JState1">State</label>
                  <input type="text" name="JState1" id="JState1" />
                </div>
                <div className="field OneThenTwoThenthree third">
                  <label htmlFor="JZIP1">ZIP</label>
                  <input type="text" name="JZIP1" id="JZIP1" />
                </div>
              </legend>
              <fieldset>
                <label htmlFor="radioWHHide2" className="btn">
                  -
                </label>
                <label htmlFor="radioWHShow2" className="btn">
                  +
                </label>
              </fieldset>
              <input
                id="radioWHHide2"
                className="rad"
                name="HC2"
                type="radio"
              />
              <fieldset className="set">
                <legend />
              </fieldset>
              <input
                id="radioWHShow2"
                className="rad"
                name="HC2"
                type="radio"
              />
              <fieldset className="set">
                <legend>
                  <div className="field first">
                    <label htmlFor="Title2">Job Title / Position</label>
                    <input type="text" name="Title2" id="Title2" />
                  </div>
                  <div className="field first">
                    <label htmlFor="Description2">Description</label>
                    <textarea name="Description2" id="Description2" rows="2" />
                  </div>
                  <div className="field half first">
                    <label htmlFor="FromTo2">Start and End Dates</label>
                    <input type="text" name="FromTo2" id="FromTo2" />
                  </div>
                  <div className="field half">
                    <label htmlFor="RoP2">Rate of Pay</label>
                    <input type="text" name="RoP2" id="RoP2" />
                  </div>
                  <div className="field OneThenTwoThenthree first">
                    <label htmlFor="JAddress2">Street Address</label>
                    <input type="text" name="JAddress2" id="JAddress2" />
                  </div>
                  <div className="field OneThenTwoThenthree second">
                    <label htmlFor="JCity2">City</label>
                    <input type="text" name="JCity2" id="JCity2" />
                  </div>
                  <div className="field OneThenTwoThenthree third">
                    <label htmlFor="JState2">State</label>
                    <input type="text" name="JState2" id="JState2" />
                  </div>
                  <div className="field OneThenTwoThenthree third">
                    <label htmlFor="JZIP2">ZIP</label>
                    <input type="text" name="JZIP2" id="JZIP2" />
                  </div>
                </legend>
                <fieldset>
                  <label htmlFor="radioWHHide3" className="btn">
                    -
                  </label>
                  <label htmlFor="radioWHShow3" className="btn">
                    +
                  </label>
                </fieldset>
                <input
                  id="radioWHHide3"
                  className="rad"
                  name="HC3"
                  type="radio"
                />
                <fieldset className="set">
                  <legend />
                </fieldset>
                <input
                  id="radioWHShow3"
                  className="rad"
                  name="HC3"
                  type="radio"
                />
                <fieldset className="set">
                  <legend>
                    <div className="field first">
                      <label htmlFor="Title3">Job Title / Position</label>
                      <input type="text" name="Title3" id="Title3" />
                    </div>
                    <div className="field first">
                      <label htmlFor="Description3">Description</label>
                      <textarea
                        name="Description3"
                        id="Description3"
                        rows="3"
                      />
                    </div>
                    <div className="field half first">
                      <label htmlFor="FromTo3">Start and End Dates</label>
                      <input type="text" name="FromTo3" id="FromTo3" />
                    </div>
                    <div className="field half">
                      <label htmlFor="RoP3">Rate of Pay</label>
                      <input type="text" name="RoP3" id="RoP3" />
                    </div>
                    <div className="field OneThenTwoThenthree first">
                      <label htmlFor="JAddress3">Street Address</label>
                      <input type="text" name="JAddress3" id="JAddress3" />
                    </div>
                    <div className="field OneThenTwoThenthree second">
                      <label htmlFor="JCity3">City</label>
                      <input type="text" name="JCity3" id="JCity3" />
                    </div>
                    <div className="field OneThenTwoThenthree third">
                      <label htmlFor="JState3">State</label>
                      <input type="text" name="JState3" id="JState3" />
                    </div>
                    <div className="field OneThenTwoThenthree third">
                      <label htmlFor="JZIP3">ZIP</label>
                      <input type="text" name="JZIP3" id="JZIP3" />
                    </div>
                  </legend>
                  <fieldset>
                    <label htmlFor="radioWHHide4" className="btn">
                      -
                    </label>
                    <label htmlFor="radioWHShow4" className="btn">
                      +
                    </label>
                  </fieldset>
                  <input
                    id="radioWHHide4"
                    className="rad"
                    name="HC4"
                    type="radio"
                  />
                  <fieldset className="set">
                    <legend />
                  </fieldset>
                  <input
                    id="radioWHShow4"
                    className="rad"
                    name="HC4"
                    type="radio"
                  />
                  <fieldset className="set">
                    <legend>
                      <div className="field first">
                        <label htmlFor="Title4">Job Title / Position</label>
                        <input type="text" name="Title4" id="Title4" />
                      </div>
                      <div className="field first">
                        <label htmlFor="Description4">Description</label>
                        <textarea
                          name="Description4"
                          id="Description4"
                          rows="4"
                        />
                      </div>
                      <div className="field half first">
                        <label htmlFor="FromTo4">Start and End Dates</label>
                        <input type="text" name="FromTo4" id="FromTo4" />
                      </div>
                      <div className="field half">
                        <label htmlFor="RoP4">Rate of Pay</label>
                        <input type="text" name="RoP4" id="RoP4" />
                      </div>
                      <div className="field OneThenTwoThenthree first">
                        <label htmlFor="JAddress4">Street Address</label>
                        <input type="text" name="JAddress4" id="JAddress4" />
                      </div>
                      <div className="field OneThenTwoThenthree second">
                        <label htmlFor="JCity4">City</label>
                        <input type="text" name="JCity4" id="JCity4" />
                      </div>
                      <div className="field OneThenTwoThenthree third">
                        <label htmlFor="JState4">State</label>
                        <input type="text" name="JState4" id="JState4" />
                      </div>
                      <div className="field OneThenTwoThenthree third">
                        <label htmlFor="JZIP4">ZIP</label>
                        <input type="text" name="JZIP4" id="JZIP4" />
                      </div>
                    </legend>
                  </fieldset>
                </fieldset>
              </fieldset>
            </fieldset>
          </div>
          <h4>Health Conditions</h4>
          <div>
            <fieldset>
              <label htmlFor="radioHCHide1" className="btn">
                -
              </label>
              <label htmlFor="radioHCShow1" className="btn">
                +
              </label>
            </fieldset>
            <input id="radioHCHide1" className="rad" name="HC1" type="radio" />
            <fieldset className="set">
              <legend />
            </fieldset>
            <input id="radioHCShow1" className="rad" name="HC1" type="radio" />
            <fieldset className="set">
              <legend>
                <div className="field oneThenTwo first">
                  <input
                    type="text"
                    name="HName1"
                    id="HName1"
                    placeholder="Name"
                  />
                </div>
                <div className="field oneThenTwo second">
                  <input
                    type="text"
                    name="HDescription1"
                    id="HDescription1"
                    placeholder="Description"
                  />
                </div>
              </legend>
              <fieldset>
                <label htmlFor="radioHCHide2" className="btn">
                  -
                </label>
                <label htmlFor="radioHCShow2" className="btn">
                  +
                </label>
              </fieldset>
              <input
                id="radioHCHide2"
                className="rad"
                name="HC2"
                type="radio"
              />
              <fieldset className="set">
                <legend />
              </fieldset>
              <input
                id="radioHCShow2"
                className="rad"
                name="HC2"
                type="radio"
              />
              <fieldset className="set">
                <legend>
                  <div className="field oneThenTwo first">
                    <input
                      type="text"
                      name="HName2"
                      id="HName2"
                      placeholder="Name"
                    />
                  </div>
                  <div className="field oneThenTwo second">
                    <input
                      type="text"
                      name="HDescription2"
                      id="HDescription2"
                      placeholder="Description"
                    />
                  </div>
                </legend>
                <fieldset>
                  <label htmlFor="radioHCHide3" className="btn">
                    -
                  </label>
                  <label htmlFor="radioHCShow3" className="btn">
                    +
                  </label>
                </fieldset>
                <input
                  id="radioHCHide3"
                  className="rad"
                  name="HC3"
                  type="radio"
                />
                <fieldset className="set">
                  <legend />
                </fieldset>
                <input
                  id="radioHCShow3"
                  className="rad"
                  name="HC3"
                  type="radio"
                />
                <fieldset className="set">
                  <legend>
                    <div className="field oneThenTwo first">
                      <input
                        type="text"
                        name="HName3"
                        id="HName3"
                        placeholder="Name"
                      />
                    </div>
                    <div className="field oneThenTwo second">
                      <input
                        type="text"
                        name="HDescription3"
                        id="HDescription3"
                        placeholder="Description"
                      />
                    </div>
                  </legend>
                  <fieldset>
                    <label htmlFor="radioHCHide4" className="btn">
                      -
                    </label>
                    <label htmlFor="radioHCShow4" className="btn">
                      +
                    </label>
                  </fieldset>
                  <input
                    id="radioHCHide4"
                    className="rad"
                    name="HC4"
                    type="radio"
                  />
                  <fieldset className="set">
                    <legend />
                  </fieldset>
                  <input
                    id="radioHCShow4"
                    className="rad"
                    name="HC4"
                    type="radio"
                  />
                  <fieldset className="set">
                    <legend>
                      <div className="field oneThenTwo first">
                        <input
                          type="text"
                          name="HName4"
                          id="HName4"
                          placeholder="Name"
                        />
                      </div>
                      <div className="field oneThenTwo second">
                        <input
                          type="text"
                          name="HDescription4"
                          id="HDescription4"
                          placeholder="Description"
                        />
                      </div>
                    </legend>
                    <fieldset>
                      <label htmlFor="radioHCHide5" className="btn">
                        -
                      </label>
                      <label htmlFor="radioHCShow5" className="btn">
                        +
                      </label>
                    </fieldset>
                    <input
                      id="radioHCHide5"
                      className="rad"
                      name="HC5"
                      type="radio"
                    />
                    <fieldset className="set">
                      <legend />
                    </fieldset>
                    <input
                      id="radioHCShow5"
                      className="rad"
                      name="HC5"
                      type="radio"
                    />
                    <fieldset className="set">
                      <legend>
                        <div className="field oneThenTwo first">
                          <input
                            type="text"
                            name="HName5"
                            id="HName5"
                            placeholder="Name"
                          />
                        </div>
                        <div className="field oneThenTwo second">
                          <input
                            type="text"
                            name="HDescription5"
                            id="HDescription5"
                            placeholder="Description"
                          />
                        </div>
                      </legend>
                      <fieldset>
                        <label htmlFor="radioHCHide6" className="btn">
                          -
                        </label>
                        <label htmlFor="radioHCShow6" className="btn">
                          +
                        </label>
                      </fieldset>
                      <input
                        id="radioHCHide6"
                        className="rad"
                        name="HC6"
                        type="radio"
                      />
                      <fieldset className="set">
                        <legend />
                      </fieldset>
                      <input
                        id="radioHCShow6"
                        className="rad"
                        name="HC6"
                        type="radio"
                      />
                      <fieldset className="set">
                        <legend>
                          <div className="field oneThenTwo first">
                            <input
                              type="text"
                              name="HName6"
                              id="HName6"
                              placeholder="Name"
                            />
                          </div>
                          <div className="field oneThenTwo second">
                            <input
                              type="text"
                              name="HDescription6"
                              id="HDescription6"
                              placeholder="Description"
                            />
                          </div>
                        </legend>
                        <fieldset>
                          <label htmlFor="radioHCHide7" className="btn">
                            -
                          </label>
                          <label htmlFor="radioHCShow7" className="btn">
                            +
                          </label>
                        </fieldset>
                        <input
                          id="radioHCHide7"
                          className="rad"
                          name="HC7"
                          type="radio"
                        />
                        <fieldset className="set">
                          <legend />
                        </fieldset>
                        <input
                          id="radioHCShow7"
                          className="rad"
                          name="HC7"
                          type="radio"
                        />
                        <fieldset className="set">
                          <legend>
                            <div className="field oneThenTwo first">
                              <input
                                type="text"
                                name="HName7"
                                id="HName7"
                                placeholder="Name"
                              />
                            </div>
                            <div className="field oneThenTwo second">
                              <input
                                type="text"
                                name="HDescription7"
                                id="HDescription7"
                                placeholder="Description"
                              />
                            </div>
                          </legend>
                          <fieldset>
                            <label htmlFor="radioHCHide8" className="btn">
                              -
                            </label>
                            <label htmlFor="radioHCShow8" className="btn">
                              +
                            </label>
                          </fieldset>
                          <input
                            id="radioHCHide8"
                            className="rad"
                            name="HC8"
                            type="radio"
                          />
                          <fieldset className="set">
                            <legend />
                          </fieldset>
                          <input
                            id="radioHCShow8"
                            className="rad"
                            name="HC8"
                            type="radio"
                          />
                          <fieldset className="set">
                            <legend>
                              <div className="field oneThenTwo first">
                                <input
                                  type="text"
                                  name="HName8"
                                  id="HName8"
                                  placeholder="Name"
                                />
                              </div>
                              <div className="field oneThenTwo second">
                                <input
                                  type="text"
                                  name="HDescription8"
                                  id="HDescription8"
                                  placeholder="Description"
                                />
                              </div>
                            </legend>
                            <fieldset>
                              <label htmlFor="radioHCHide9" className="btn">
                                -
                              </label>
                              <label htmlFor="radioHCShow9" className="btn">
                                +
                              </label>
                            </fieldset>
                            <input
                              id="radioHCHide9"
                              className="rad"
                              name="HC9"
                              type="radio"
                            />
                            <fieldset className="set">
                              <legend />
                            </fieldset>
                            <input
                              id="radioHCShow9"
                              className="rad"
                              name="HC9"
                              type="radio"
                            />
                            <fieldset className="set">
                              <legend>
                                <div className="field oneThenTwo first">
                                  <input
                                    type="text"
                                    name="HName9"
                                    id="HName9"
                                    placeholder="Name"
                                  />
                                </div>
                                <div className="field oneThenTwo second">
                                  <input
                                    type="text"
                                    name="HDescription9"
                                    id="HDescription9"
                                    placeholder="Description"
                                  />
                                </div>
                              </legend>
                              <fieldset>
                                <label htmlFor="radioHCHide10" className="btn">
                                  -
                                </label>
                                <label htmlFor="radioHCShow10" className="btn">
                                  +
                                </label>
                              </fieldset>
                              <input
                                id="radioHCHide10"
                                className="rad"
                                name="HC10"
                                type="radio"
                              />
                              <fieldset className="set">
                                <legend />
                              </fieldset>
                              <input
                                id="radioHCShow10"
                                className="rad"
                                name="HC10"
                                type="radio"
                              />
                              <fieldset className="set">
                                <legend>
                                  <div className="field oneThenTwo first">
                                    <input
                                      type="text"
                                      name="HName10"
                                      id="HName10"
                                      placeholder="Name"
                                    />
                                  </div>
                                  <div className="field oneThenTwo second">
                                    <input
                                      type="text"
                                      name="HDescription10"
                                      id="HDescription10"
                                      placeholder="Description"
                                    />
                                  </div>
                                </legend>
                              </fieldset>
                            </fieldset>
                          </fieldset>
                        </fieldset>
                      </fieldset>
                    </fieldset>
                  </fieldset>
                </fieldset>
              </fieldset>
            </fieldset>
          </div>
          <h4>Medicines</h4>
          <div>
            <fieldset>
              <label htmlFor="radioMedHide1" className="btn">
                -
              </label>
              <label htmlFor="radioMedShow1" className="btn">
                +
              </label>
            </fieldset>
            <input
              id="radioMedHide1"
              className="rad"
              name="Med1"
              type="radio"
            />
            <fieldset className="set">
              <legend />
            </fieldset>
            <input
              id="radioMedShow1"
              className="rad"
              name="Med1"
              type="radio"
            />
            <fieldset className="set">
              <legend>
                <div className="field oneThenTwo first">
                  <input
                    type="text"
                    name="MName1"
                    id="MName1"
                    placeholder="Name"
                  />
                </div>
                <div className="field oneThenTwo second">
                  <input
                    type="text"
                    name="MReason1"
                    id="MReason1"
                    placeholder="Reason (If Known)"
                  />
                </div>
              </legend>
              <fieldset>
                <legend />
                <label htmlFor="radioMedHide2" className="btn">
                  -
                </label>
                <label htmlFor="radioMedShow2" className="btn">
                  +
                </label>
              </fieldset>
              <input
                id="radioMedHide2"
                className="rad"
                name="Med2"
                type="radio"
              />
              <fieldset className="set">
                <legend />
              </fieldset>
              <input
                id="radioMedShow2"
                className="rad"
                name="Med2"
                type="radio"
              />
              <fieldset className="set">
                <legend>
                  <div className="field oneThenTwo first">
                    <input
                      type="text"
                      name="MName2"
                      id="MName2"
                      placeholder="Name"
                    />
                  </div>
                  <div className="field oneThenTwo second">
                    <input
                      type="text"
                      name="MReason2"
                      id="MReason2"
                      placeholder="Reason (If Known)"
                    />
                  </div>
                </legend>
                <fieldset>
                  <legend />
                  <label htmlFor="radioMedHide3" className="btn">
                    -
                  </label>
                  <label htmlFor="radioMedShow3" className="btn">
                    +
                  </label>
                </fieldset>
                <input
                  id="radioMedHide3"
                  className="rad"
                  name="Med3"
                  type="radio"
                />
                <fieldset className="set">
                  <legend />
                </fieldset>
                <input
                  id="radioMedShow3"
                  className="rad"
                  name="Med3"
                  type="radio"
                />
                <fieldset className="set">
                  <legend>
                    <div className="field oneThenTwo first">
                      <input
                        type="text"
                        name="MName3"
                        id="MName3"
                        placeholder="Name"
                      />
                    </div>
                    <div className="field oneThenTwo second">
                      <input
                        type="text"
                        name="MReason3"
                        id="MReason3"
                        placeholder="Reason (If Known)"
                      />
                    </div>
                  </legend>
                  <fieldset>
                    <legend />
                    <label htmlFor="radioMedHide4" className="btn">
                      -
                    </label>
                    <label htmlFor="radioMedShow4" className="btn">
                      +
                    </label>
                  </fieldset>
                  <input
                    id="radioMedHide4"
                    className="rad"
                    name="Med4"
                    type="radio"
                  />
                  <fieldset className="set">
                    <legend />
                  </fieldset>
                  <input
                    id="radioMedShow4"
                    className="rad"
                    name="Med4"
                    type="radio"
                  />
                  <fieldset className="set">
                    <legend>
                      <div className="field oneThenTwo first">
                        <input
                          type="text"
                          name="MName4"
                          id="MName4"
                          placeholder="Name"
                        />
                      </div>
                      <div className="field oneThenTwo second">
                        <input
                          type="text"
                          name="MReason4"
                          id="MReason4"
                          placeholder="Reason (If Known)"
                        />
                      </div>
                    </legend>
                    <fieldset>
                      <legend />
                      <label htmlFor="radioMedHide5" className="btn">
                        -
                      </label>
                      <label htmlFor="radioMedShow5" className="btn">
                        +
                      </label>
                    </fieldset>
                    <input
                      id="radioMedHide5"
                      className="rad"
                      name="Med5"
                      type="radio"
                    />
                    <fieldset className="set">
                      <legend />
                    </fieldset>
                    <input
                      id="radioMedShow5"
                      className="rad"
                      name="Med5"
                      type="radio"
                    />
                    <fieldset className="set">
                      <legend>
                        <div className="field oneThenTwo first">
                          <input
                            type="text"
                            name="MName5"
                            id="MName5"
                            placeholder="Name"
                          />
                        </div>
                        <div className="field oneThenTwo second">
                          <input
                            type="text"
                            name="MReason5"
                            id="MReason5"
                            placeholder="Reason (If Known)"
                          />
                        </div>
                      </legend>
                      <fieldset>
                        <legend />
                        <label htmlFor="radioMedHide6" className="btn">
                          -
                        </label>
                        <label htmlFor="radioMedShow6" className="btn">
                          +
                        </label>
                      </fieldset>
                      <input
                        id="radioMedHide6"
                        className="rad"
                        name="Med6"
                        type="radio"
                      />
                      <fieldset className="set">
                        <legend />
                      </fieldset>
                      <input
                        id="radioMedShow6"
                        className="rad"
                        name="Med6"
                        type="radio"
                      />
                      <fieldset className="set">
                        <legend>
                          <div className="field oneThenTwo first">
                            <input
                              type="text"
                              name="MName6"
                              id="MName6"
                              placeholder="Name"
                            />
                          </div>
                          <div className="field oneThenTwo second">
                            <input
                              type="text"
                              name="MReason6"
                              id="MReason6"
                              placeholder="Reason (If Known)"
                            />
                          </div>
                        </legend>
                        <fieldset>
                          <legend />
                          <label htmlFor="radioMedHide7" className="btn">
                            -
                          </label>
                          <label htmlFor="radioMedShow7" className="btn">
                            +
                          </label>
                        </fieldset>
                        <input
                          id="radioMedHide7"
                          className="rad"
                          name="Med7"
                          type="radio"
                        />
                        <fieldset className="set">
                          <legend />
                        </fieldset>
                        <input
                          id="radioMedShow7"
                          className="rad"
                          name="Med7"
                          type="radio"
                        />
                        <fieldset className="set">
                          <legend>
                            <div className="field oneThenTwo first">
                              <input
                                type="text"
                                name="MName7"
                                id="MName7"
                                placeholder="Name"
                              />
                            </div>
                            <div className="field oneThenTwo second">
                              <input
                                type="text"
                                name="MReason7"
                                id="MReason7"
                                placeholder="Reason (If Known)"
                              />
                            </div>
                          </legend>
                          <fieldset>
                            <legend />
                            <label htmlFor="radioMedHide8" className="btn">
                              -
                            </label>
                            <label htmlFor="radioMedShow8" className="btn">
                              +
                            </label>
                          </fieldset>
                          <input
                            id="radioMedHide8"
                            className="rad"
                            name="Med8"
                            type="radio"
                          />
                          <fieldset className="set">
                            <legend />
                          </fieldset>
                          <input
                            id="radioMedShow8"
                            className="rad"
                            name="Med8"
                            type="radio"
                          />
                          <fieldset className="set">
                            <legend>
                              <div className="field oneThenTwo first">
                                <input
                                  type="text"
                                  name="MName8"
                                  id="MName8"
                                  placeholder="Name"
                                />
                              </div>
                              <div className="field oneThenTwo second">
                                <input
                                  type="text"
                                  name="MReason8"
                                  id="MReason8"
                                  placeholder="Reason (If Known)"
                                />
                              </div>
                            </legend>
                            <fieldset>
                              <legend />
                              <label htmlFor="radioMedHide9" className="btn">
                                -
                              </label>
                              <label htmlFor="radioMedShow9" className="btn">
                                +
                              </label>
                            </fieldset>
                            <input
                              id="radioMedHide9"
                              className="rad"
                              name="Med9"
                              type="radio"
                            />
                            <fieldset className="set">
                              <legend />
                            </fieldset>
                            <input
                              id="radioMedShow9"
                              className="rad"
                              name="Med9"
                              type="radio"
                            />
                            <fieldset className="set">
                              <legend>
                                <div className="field oneThenTwo first">
                                  <input
                                    type="text"
                                    name="MName9"
                                    id="MName9"
                                    placeholder="Name"
                                  />
                                </div>
                                <div className="field oneThenTwo second">
                                  <input
                                    type="text"
                                    name="MReason9"
                                    id="MReason9"
                                    placeholder="Reason (If Known)"
                                  />
                                </div>
                              </legend>
                              <fieldset>
                                <legend />
                                <label htmlFor="radioMedHide10" className="btn">
                                  -
                                </label>
                                <label htmlFor="radioMedShow10" className="btn">
                                  +
                                </label>
                              </fieldset>
                              <input
                                id="radioMedHide10"
                                className="rad"
                                name="Med10"
                                type="radio"
                              />
                              <fieldset className="set">
                                <legend />
                              </fieldset>
                              <input
                                id="radioMedShow10"
                                className="rad"
                                name="Med10"
                                type="radio"
                              />
                              <fieldset className="set">
                                <legend>
                                  <div className="field oneThenTwo first">
                                    <input
                                      type="text"
                                      name="MName10"
                                      id="MName10"
                                      placeholder="Name"
                                    />
                                  </div>
                                  <div className="field oneThenTwo second">
                                    <input
                                      type="text"
                                      name="MReason10"
                                      id="MReason10"
                                      placeholder="Reason (If Known)"
                                    />
                                  </div>
                                </legend>
                              </fieldset>
                            </fieldset>
                          </fieldset>
                        </fieldset>
                      </fieldset>
                    </fieldset>
                  </fieldset>
                </fieldset>
              </fieldset>
            </fieldset>
          </div>
          <h4>Healthcare Professionals</h4>
          <div>
            <fieldset>
              <label htmlFor="radioD1Hide" className="btn">
                -
              </label>
              <label htmlFor="radioD1Show" className="btn">
                +
              </label>
            </fieldset>
            <input id="radioD1Hide" className="rad" name="doc1" type="radio" />
            <fieldset className="set">
              <legend />
            </fieldset>
            <input id="radioD1Show" className="rad" name="doc1" type="radio" />
            <fieldset className="set">
              <legend>
                <div className="field first">
                  <label htmlFor="DName1">Name</label>
                  <input type="text" name="doc1" id="DName1" />
                </div>
                <div className="field half first">
                  <label htmlFor="Specialty1">Specialty</label>
                  <input type="text" name="doc1" id="Specialty1" />
                </div>
                <div className="field half">
                  <label htmlFor="DPhone1">Phone</label>
                  <input type="text" name="doc1" id="DPhone1" />
                </div>
                <div className="field OneThenTwoThenthree first">
                  <label htmlFor="DAddress1">Street Address</label>
                  <input type="text" name="doc1" id="DAddress1" />
                </div>
                <div className="field OneThenTwoThenthree second">
                  <label htmlFor="DCity1">City</label>
                  <input type="text" name="doc1" id="DCity1" />
                </div>
                <div className="field OneThenTwoThenthree third">
                  <label htmlFor="DState1">State</label>
                  <input type="text" name="doc1" id="DState1" />
                </div>
                <div className="field OneThenTwoThenthree third">
                  <label htmlFor="DZIP1">ZIP</label>
                  <input type="text" name="doc1" id="DZIP1" />
                </div>
              </legend>
              <fieldset>
                <legend>Do you have another doctor?</legend>
                <label htmlFor="radioD2Hide" className="btn">
                  -
                </label>
                <label htmlFor="radioD2Show" className="btn">
                  +
                </label>
              </fieldset>
              <input
                id="radioD2Hide"
                className="rad"
                name="doc2"
                type="radio"
              />
              <fieldset className="set">
                <legend />
              </fieldset>
              <input
                id="radioD2Show"
                className="rad"
                name="doc2"
                type="radio"
              />
              <fieldset className="set">
                <legend>
                  <div className="field first">
                    <label htmlFor="DName2">Name</label>
                    <input type="text" name="doc2" id="DName2" />
                  </div>
                  <div className="field half first">
                    <label htmlFor="Specialty2">Specialty</label>
                    <input type="text" name="doc2" id="Specialty2" />
                  </div>
                  <div className="field half">
                    <label htmlFor="DPhone2">Phone</label>
                    <input type="text" name="doc2" id="DPhone2" />
                  </div>
                  <div className="field OneThenTwoThenthree first">
                    <label htmlFor="DAddress2">Street Address</label>
                    <input type="text" name="doc2" id="DAddress2" />
                  </div>
                  <div className="field OneThenTwoThenthree second">
                    <label htmlFor="DCity2">City</label>
                    <input type="text" name="doc2" id="DCity2" />
                  </div>
                  <div className="field OneThenTwoThenthree third">
                    <label htmlFor="DState2">State</label>
                    <input type="text" name="doc2" id="DState2" />
                  </div>
                  <div className="field OneThenTwoThenthree third">
                    <label htmlFor="DZIP2">ZIP</label>
                    <input type="text" name="doc2" id="DZIP2" />
                  </div>
                </legend>
                <fieldset>
                  <legend>Do you have another doctor?</legend>
                  <label htmlFor="radioD3Hide" className="btn">
                    -
                  </label>
                  <label htmlFor="radioD3Show" className="btn">
                    +
                  </label>
                </fieldset>
                <input
                  id="radioD3Hide"
                  className="rad"
                  name="doc3"
                  type="radio"
                />
                <fieldset className="set">
                  <legend />
                </fieldset>
                <input
                  id="radioD3Show"
                  className="rad"
                  name="doc3"
                  type="radio"
                />
                <fieldset className="set">
                  <legend>
                    <div className="field first">
                      <label htmlFor="DName3">Name</label>
                      <input type="text" name="doc3" id="DName3" />
                    </div>
                    <div className="field half first">
                      <label htmlFor="Specialty3">Specialty</label>
                      <input type="text" name="doc3" id="Specialty3" />
                    </div>
                    <div className="field half">
                      <label htmlFor="DPhone3">Phone</label>
                      <input type="text" name="doc3" id="DPhone3" />
                    </div>
                    <div className="field OneThenTwoThenthree first">
                      <label htmlFor="DAddress3">Street Address</label>
                      <input type="text" name="doc3" id="DAddress3" />
                    </div>
                    <div className="field OneThenTwoThenthree second">
                      <label htmlFor="DCity3">City</label>
                      <input type="text" name="doc3" id="DCity3" />
                    </div>
                    <div className="field OneThenTwoThenthree third">
                      <label htmlFor="DState3">State</label>
                      <input type="text" name="doc3" id="DState3" />
                    </div>
                    <div className="field OneThenTwoThenthree third">
                      <label htmlFor="DZIP3">ZIP</label>
                      <input type="text" name="doc3" id="DZIP3" />
                    </div>
                  </legend>
                  <fieldset>
                    <legend>Do you have another doctor?</legend>
                    <label htmlFor="radioD4Hide" className="btn">
                      -
                    </label>
                    <label htmlFor="radioD4Show" className="btn">
                      +
                    </label>
                  </fieldset>
                  <input
                    id="radioD4Hide"
                    className="rad"
                    name="doc4"
                    type="radio"
                  />
                  <fieldset className="set">
                    <legend />
                  </fieldset>
                  <input
                    id="radioD4Show"
                    className="rad"
                    name="doc4"
                    type="radio"
                  />

                  <fieldset className="set">
                    <legend>
                      <div className="field first">
                        <label htmlFor="DName4">Name</label>
                        <input type="text" name="doc4" id="DName4" />
                      </div>
                      <div className="field half first">
                        <label htmlFor="Specialty4">Specialty</label>
                        <input type="text" name="doc4" id="Specialty4" />
                      </div>
                      <div className="field half">
                        <label htmlFor="DPhone4">Phone</label>
                        <input type="text" name="doc4" id="DPhone4" />
                      </div>
                      <div className="field OneThenTwoThenthree first">
                        <label htmlFor="DAddress4">Street Address</label>
                        <input type="text" name="doc4" id="DAddress4" />
                      </div>
                      <div className="field OneThenTwoThenthree second">
                        <label htmlFor="DCity4">City</label>
                        <input type="text" name="doc4" id="DCity4" />
                      </div>
                      <div className="field OneThenTwoThenthree third">
                        <label htmlFor="DState4">State</label>
                        <input type="text" name="doc4" id="DState4" />
                      </div>
                      <div className="field OneThenTwoThenthree third">
                        <label htmlFor="DZIP4">ZIP</label>
                        <input type="text" name="doc4" id="DZIP4" />
                      </div>
                    </legend>
                  </fieldset>
                </fieldset>
              </fieldset>
            </fieldset>
          </div>
          <h4>Do you have a Worker's Compensation Number?</h4>
          <div>
            <fieldset>
              <label htmlFor="radioWCNHide" className="btn">
                No
              </label>
              <label htmlFor="radioWCNShow" className="btn">
                Yes
              </label>
            </fieldset>
            <input id="radioWCNHide" className="rad" name="WCN" type="radio" />
            <fieldset className="set">
              <legend />
            </fieldset>
            <input id="radioWCNShow" className="rad" name="WCN" type="radio" />
            <fieldset className="set">
              <legend>
                <div className="WCN field first">
                  <label htmlFor="WCN">Worker's Compensation Number</label>
                  <input type="text" name="WCN" id="WCN" />
                </div>
              </legend>
            </fieldset>
          </div>
          
          <ul className="actions">
            <li>
              <input type="submit" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" className="special" />
            </li>
          </ul>
        </form>
      </div>
    )
  }
}
