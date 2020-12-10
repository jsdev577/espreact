import React from 'react';
import Rocket from '../Components/images/rocket.svg';
import Puzzle from '../Components/images/puzzle.svg';
import Twentfour from '../Components/images/24-hours.svg';
import tractor from '../Components/images/tractor.svg';
import calendar from '../Components/images/calendar.svg';
import teamwork from '../Components/images/teamwork.svg';
import money from '../Components/images/money.svg';
import waterdrop from '../Components/images/water-drop.svg';
import Header from "./Header";
import Footer from "./Footer";




export default function Home() {
  return (
    <div >
      <Header></Header>

      <section className="u-align-center u-clearfix u-image u-shading u-section-1">
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-custom-font u-font-roboto-slab u-text u-text-1">DeFi Staking&nbsp;<br />Platform&nbsp;Built on&nbsp;<br />
            <font className="u-text-white">Ethereum</font>
          </h1>
          <div className="u-border-6 u-border-white u-line u-line-horizontal u-line-1"></div>
          <h5 className="u-text u-text-default u-text-2">Daily Auction Lobby, Daily ETH Dividends, Lucrative Staking System, Completely Decentralized</h5>
          <a href={`/stake`} className="u-btn u-btn-round u-button-style u-hover-palette-3-base u-palette-1-base u-radius-50 u-btn-1"> &nbsp;&#8203;&nbsp;Staking Lounge</a>
          <a href={`/auction`} className="u-btn u-btn-round u-button-style u-hover-palette-3-light-1 u-palette-1-base u-radius-50 u-btn-2">Auction Lobby</a>
          <h5 className="u-text u-text-default u-text-3">Stake it till you make it - Longer and Bigger Pays Better!</h5>
          <div className="u-clearfix u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-left-cell u-size-20 u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle">
                    <span className="u-icon u-icon-circle u-palette-3-base u-spacing-20 u-icon-1">
                      <img src={calendar} />
                    </span>
                    <h4 className="u-align-center u-text u-text-4">Daily Auction Lobby</h4>
                    <p className="u-align-center u-text u-text-5">Our Daily Auctions will start from 5 million ESP tokens per day and will be distributed between the users that participated in Auction based on their purchase amount. This will reduce over the next 365 days.</p>
                  </div>
                </div>
                <div className="u-align-center u-container-style u-layout-cell u-size-20 u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle"><span className="u-icon u-icon-circle u-palette-4-base

          u-spacing-20 u-icon-2"> <img src={Twentfour} />    </span>
                    <h4 className="u-text u-text-6">Daily Dividends in ETH</h4>
                    <p className="u-text u-text-7">We take great pride in our dividend strategy.&nbsp;Everyday 95% of the previous day's ETH that was spent in the Auction Lobby will be pooled and allocated to users based upon their completed stake terms.</p>
                  </div>
                </div>
                <div className="u-align-center u-container-style u-layout-cell u-right-cell u-size-20 u-layout-cell-3">
                  <div className="u-container-layout u-valign-middle"><span className="u-icon u-icon-circle
          u-palette-1-base u-spacing-20 u-icon-3">  <img src={money} />

                  </span>
                    <h4 className="u-text u-text-8">Lucrative Staking System</h4>
                    <p className="u-text u-text-9">Stake your DSP tokens within the Staking Portal and earn daily interest. Additionally, Stakers are rewarded TRX tokens from the daily Lobbies based off the percentage of total tokens being Staked.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="u-align-center u-clearfix u-palette-5-dark-3 u-section-2" id="carousel_b5cb">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-expanded-width u-list u-repeater u-list-1">
            <div className="u-align-left u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                <span className="u-icon u-icon-circle u-palette-3-base u-spacing-15 u-icon-1">
                  <img src={Rocket} />
                </span>
                <div className="u-container-style u-group u-group-1">
                  <div className="u-container-layout u-valign-top u-container-layout-2">

                    <h5 className="u-text u-text-1">Nov 2020</h5>

                    <p className="u-text u-text-2">ESP
                    platform launched
                    Marketing
Team Hiring</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-align-left u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                <span className="u-icon u-icon-circle u-palette-3-base u-spacing-15 u-icon-2">
                  <img src={Puzzle} />



                </span>
                <div className="u-container-style u-group u-video-cover u-group-2">
                  <div className="u-container-layout u-valign-top u-container-layout-4">
                    <h5 className="u-text u-text-3">Dec 2020</h5>
                    <p className="u-text u-text-4">ESP
Ambassador Initative Launch<br />Community
Governance Implement
            </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-align-left u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                <span className="u-icon u-icon-circle u-palette-3-base u-spacing-14 u-icon-3"> <img src={teamwork} />  </span>
                <div className="u-container-style u-group u-video-cover u-group-3">
                  <div className="u-container-layout u-valign-top u-container-layout-6">
                    <h5 className="u-text u-text-5">Jan 2021</h5>
                    <p className="u-text u-text-6">EYFI
– Deflationary Token Launch</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="u-align-left u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-7">
                <span class="u-icon u-icon-circle u-palette-3-base u-spacing-15 u-icon-4">
                  <img src={tractor} />
                </span>
                <div class="u-container-style u-group u-video-cover u-group-4">
                  <div class="u-container-layout u-valign-top u-container-layout-8">
                    <h5 class="u-text u-text-7">Feb 2021</h5>
                    <p class="u-text u-text-8">ESP-based

EYFI Yield Farming Launch</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-align-left u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-7">
                <span className="u-icon u-icon-circle u-palette-3-base u-spacing-15 u-icon-4"> <img src={waterdrop} /> </span>
                <div className="u-container-style u-group u-video-cover u-group-4">
                  <div className="u-container-layout u-valign-top u-container-layout-8">
                    <h5 className="u-text u-text-7">Mar 2021</h5>
                    <p className="u-text u-text-8">Uniswap
Liquidity Add</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-align-left u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-7">
                <span className="u-icon u-icon-circle u-palette-3-base u-spacing-15 u-icon-4"> <img src={Puzzle} /></span>
                <div className="u-container-style u-group u-video-cover u-group-4">
                  <div className="u-container-layout u-valign-top u-container-layout-8">
                    <h5 className="u-text u-text-7">Q2 2021</h5>
                    <p className="u-text u-text-8">More Features Based on Market Response i.e., Lending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="u-clearfix u-grey-90 u-section-3" id="carousel_f864">
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <div className="u-form u-form-1">
                      <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form">
                        <div className="u-form-email u-form-group u-form-partition-factor-2 u-form-group-1">
                          <label className="u-form-control-hidden u-label">Email</label>
                          <input type="email" placeholder="Enter a valid email address" id="email-b04a" name="email" className="u-grey-75 u-input u-input-rectangle u-input-1" required="" />
                        </div>
                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-form-group-2">
                          <label className="u-form-control-hidden u-label">Name</label>
                          <input type="text" placeholder="Enter your Name" id="name-b04a" name="name" className="u-grey-75 u-input u-input-rectangle u-input-2" required="" />
                        </div>
                        <div className="u-form-address u-form-group u-form-partition-factor-2 u-form-group-3">
                          <label className="u-form-control-hidden u-label">Address</label>
                          <input type="text" placeholder="Enter your address" id="address-920c" name="address" className="u-grey-75 u-input u-input-rectangle u-input-3" required="" />
                        </div>
                        <div className="u-form-group u-form-partition-factor-2 u-form-phone u-form-group-4">
                          <label className="u-form-control-hidden u-label">Phone</label>
                          <input type="tel" pattern="\+?\d{0,2}[\s\(\-]?([0-9]{3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})"
                            placeholder="Enter your phone (e.g. +14155552675)" id="phone-6f45" name="phone" className="u-grey-75 u-input u-input-rectangle u-input-4"
                            required="" />
                        </div>
                        <div className="u-form-group u-form-message u-form-group-5">
                          <label className="u-form-control-hidden u-label">Message</label>
                          <textarea placeholder="Enter your message" rows="4" cols="50" id="message-b04a" name="message" className="u-grey-75 u-input u-input-rectangle u-input-5" required=""></textarea>
                        </div>
                        <div className="u-align-left u-form-group u-form-submit u-form-group-6">
                          <a href="https://nicepage.com" className="u-btn u-btn-submit u-button-style u-palette-1-base u-btn-1">Submit</a>
                          <input type="submit" value="submit" className="u-form-control-hidden" />
                        </div>
                        <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                        <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                        <input type="hidden" value="" name="recaptchaResponse" />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <h5 className="u-text u-text-1">We would love to hear from you!</h5>
                    <h2 className="u-text u-text-palette-1-base u-text-2">Connect With Us</h2>
                    <p className="u-text u-text-3">Right now we are just starting this project, so, we have a small team running the show. So every feedback you provide, any suggestions you have and any new idea you like to share — please don’t hesitate, write to us immediately. <br></br>
                      <br></br>We are social animals. Animals because we’ve some degree of randomness in my behaviour. Social because we love to hear and share with people. <br></br>
                    </p>
                    <div className="u-social-icons u-spacing-10 u-social-icons-1">
                      <a className="u-social-url" target="_blank" href="">
                        <span className="u-icon u-icon-circle u-social-facebook u-social-type-logo u-icon-1">
                        </span>
                      </a>
                      <a className="u-social-url" target="_blank" href="">
                        <span className="u-icon u-icon-circle u-social-twitter u-social-type-logo u-icon-2">
                        </span>
                      </a>
                      <a className="u-social-url" target="_blank" href="#">
                        <span className="u-icon u-icon-circle u-social-tumblr u-social-type-logo u-icon-3">
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>


    </div>





  )

}
