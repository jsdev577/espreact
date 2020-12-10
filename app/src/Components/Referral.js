import React, { useState, useRef } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { CopyToClipboard, isCopied } from 'react-copy-to-clipboard';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Header from "./Header";
import "../App.css";
import "./Stake.css";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));



const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.black,
  },
  body: {
    fontSize: '1.25rem',
  },
}))(TableCell);



const Referral = () => {
  const [state, setstate] = useState('hello')
  const classes = useStyles();

  return (

    <div className="auction-page background-main">
      <Header></Header>


      <div className="auction_container referral-container referral-margin" >

        <div className="referral-div">
          <h1 className="h1-heading referral-h1">Your Referral Link</h1>
          <Card className="auction_card margin-card ">
            <Typography className="color-black">Your referrals will earn an extra 5% minted DSP tokens on their Auction Lobby Purchase. As a referrer you will earn an extra 10%. There are no limits on number nor the amount of referrals that you can get.</Typography>
            <CardActionArea>
              <CardContent>
                <TextField className="textfield"
                  id="outlined-secondary"
                  label="Text to be copied"
                  variant="outlined"
                  color="primary" disabled
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <CopyToClipboard text={state} onCopy={() => isCopied(true)}>
                <Button fullWidth variant="contained" size="large" color="primary" className={classes.margin} className="stake-button">
                  Copy Link
              </Button>
              </CopyToClipboard>
            </CardActions>
            <CardActions>
            </CardActions>
          </Card>
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default Referral;