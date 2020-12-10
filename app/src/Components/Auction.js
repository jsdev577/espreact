import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Header from "./Header";
import "../App.css";
import "./Stake.css";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';


import Footer from "./Footer";


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

  table: {
    minWidth: 650,
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
}));

function createData(start, end, progress, stakedAmount, shares, dividents, bonusDay, paidAmount) {
  return { start, end, progress, stakedAmount, shares, dividents, bonusDay, paidAmount };
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0, 5.0, 6.0, 12, 3),
  createData(2, 237, 9.0, 37, 4.3, 5.0, 7.0, 1.0, 6),
  createData(2, 237, 9.0, 37, 4.3, 5.0, 7.0, 1.0, 6), createData(2, 237, 9.0, 37, 4.3, 5.0, 7.0, 1.0, 6), createData(2, 237, 9.0, 37, 4.3, 5.0, 7.0, 1.0, 6), createData(2, 237, 9.0, 37, 4.3, 5.0, 7.0, 1.0, 6), createData(2, 237, 9.0, 37, 4.3, 5.0, 7.0, 1.0, 6),
];
const Auction = () => {
  const classes = useStyles();

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
  ];

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (

    <div className="auction-page" style={{ backgroundColor: '#17a2b8' }} >
      <Header className="background-nav"></Header>

      <div className="conatiner-main">

        <div className="row auction_container" >

          <div className="col-md-4"  >
            <h1 className="current_h1"> Current Dividends Pool </h1>
            <Card className="auction_card">
              <CardActionArea>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    One of the benefits of Staking DSP is TRON dividends.
                    At the end of each day a TRON dividends pool will be calculated
                    and allocated to all the open stakes based on their stake amount.
                    The TRON dividends pool comes from the total daily entry of auction
                    lobby.The only way to receive TRON Dividends is having open stakes
             </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>

                <Button fullWidth variant="contained" size="large" color="primary" className={classes.margin}>
                  Large
     </Button>


              </CardActions>
            </Card>



            <div className="auction-faq" >



              <h1 className="current_h1" >
                Auction FAQ
      </h1>
              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography >What are auction lobbies</Typography>
                </AccordionSummary>
                <AccordionDetails  >

                  <Typography>
                    Auction lobbies are Daily Auctions that offer DSP tokens
                    for TRON based on the DSP and TRON pool at the end of the day.
        </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"

                >
                  <Typography >How much DSP do lobbies pay?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography >
                    Lobbies DSP pool will start from 2.5 million DSP per day and goes until
                    1 million over the next 365 days but never goes lower than 1 million tokens per day.
        </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography >Buying tokens from exchange or participating in auction</Typography>
                </AccordionSummary>
                <Typography>
                  It is more profitable to purchase DSP tokens in the Auction lobby rather than on exchanges.
                  Stake holders are rewarded via dividends from the daily TRX pool.
         </Typography>
                <AccordionDetails>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography >Where does all the TRON go?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Dividends, well at least 95% of them! The other 5% is reserved for promotion and platform development costs.
       </Typography>

                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography >When do lobbies end?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lobbies are daily and restart every day at 00:00 UTC
     </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

          </div>

          <div className="col-md-8" >
            <Container >
              <h1 class="current_h1"> Current Dividends Pool </h1>
              <TableContainer component={Paper} className="table-auction">
                <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow style={{ boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)', padding: '5px', color: 'black' }}>
                      <TableCell >Start</TableCell>
                      <TableCell >End</TableCell>
                      <TableCell >Progress</TableCell>
                      <TableCell >Staked Amount</TableCell>
                      <TableCell >Shares</TableCell>
                      <TableCell >Dividents</TableCell>
                      <TableCell >BonusDay Rewards + Stake Interest</TableCell>
                      <TableCell >Paid Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.start} className="table_row">
                        <TableCell component="th" scope="row">
                          {row.start}
                        </TableCell>
                        <TableCell >{row.end}</TableCell>
                        <TableCell >{row.progress}</TableCell>
                        <TableCell >{row.stakedAmount}</TableCell>
                        <TableCell >{row.shares}</TableCell>
                        <TableCell >{row.dividents}</TableCell>
                        <TableCell >{row.bonusDay}</TableCell>
                        <TableCell ><Button variant="contained" color="primary">
                          Edit
          </Button></TableCell>
                      </TableRow>
                    ))}

                  </TableBody>
                </Table>
              </TableContainer>

            </Container>
          </div>


        </div>



      </div>

    </div>



  )
}

export default Auction;