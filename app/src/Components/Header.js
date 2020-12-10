import React from 'react';
import Logo from '../Components/images/ESP--TOKEN-white1.png';
import './Stake.css'


export default function Header() {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-edits header-background">
        <div class="form-inline my-2 my-lg-0">
          <header className="u-clearfix u-header u-image u-header" id="sec-d7ff" data-image-width="1420" data-image-height="1080"><a href={`/`} className="u-image u-image-round u-logo u-image-1" title="ESP">
            <img src={Logo} className="u-logo-image u-logo-image-1 img-logo" data-image-width="160" />
          </a>

            <h3 className="u-text u-text-default u-text-1 nav-bar-head" >
              <a className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-white u-btn-1 margin-added logo-name"
                href={`/`}  > Ethereum Staking Platform</a>
            </h3>
          </header>
        </div>
        <div class="collapse navbar-collapse buttons-z-index" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto links-margin">
            <li class="nav-item active">
              <a class="nav-link links-color" href={`/auction`}>Auction <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link links-color" href={`/stake`}> Stake </a>
            </li>
            <li class="nav-item">
              <a class="nav-link links-color" href={`/referral`}> Referral </a>
            </li>
            <li class="nav-item">
              <a class="nav-link links-color" href="https://etherscan.org"> Contract </a>
            </li>
            <li class="nav-item">
              <a class="nav-link links-color" href="https://metamask.org"> Connect Wallet </a>
            </li>
            <li class="nav-item">
              <a class="nav-link links-color" href="https://nicepage.com"> Timer placeholder </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  )
}