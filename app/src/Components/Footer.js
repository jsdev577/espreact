import React from "react";
import { MDBFooter } from "mdbreact";
import './Stake.css';

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="footer-edits">

      <ul class="footer_bar">

        <li class="nav-item ">
          <a class="nav-link" href="#"> DEFI STAKING PLATEFORM<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa fa-paper-plane" aria-hidden="true"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </li>



        <li class="nav-item ">
          <a class="nav-link" href="#"> Contact <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={`/auction`}>Auction</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={`/referral`}>Referral</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={`/stake`}>Stake</a>
        </li>
      </ul>

    </MDBFooter>
  );
}

export default FooterPage;