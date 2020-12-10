import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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



const useStyles = makeStyles((theme) => ({

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


function createData(start, end, progress, stakedAmount, shares, dividents, bonusDay, paidAmount) {
  return { start, end, progress, stakedAmount, shares, dividents, bonusDay, paidAmount };
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0, 5.0, 6.0, 12, 3),
  createData(2, 237, 9.0, 37, 4.3, 5.0, 7.0, 1.0, 6),
];

const Stake = () => {
  const classes = useStyles();

  const currencies = [
    {
      value: 'USD',
      label: '10',
    },
    {
      value: 'USD',
      label: '15',
    },
    {
      value: 'USD',
      label: 'All',
    },
  ];

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (

    <div className="auction-page" style={{ backgroundColor: '#17a2b8' }} >
      <Header></Header>


      <div className="row auction_container" >

        <div className="col-md-4"  >
          <h1 className="h1-heading"> Stake <Button variant="contained" size="large" color="primary" className={classes.margin} className="header-button">DSP Balance:</Button></h1>
          <Card className="auction_card margin-card">

            <CardActionArea>
              <CardContent>
                <TextField className="textfield"
                  id="outlined-secondary"
                  label="Amount to Stake"
                  variant="outlined"
                  color="primary"
                />
              </CardContent>
            </CardActionArea>
            <CardActionArea>
              <CardContent>
                <TextField className="textfield"
                  id="outlined-secondary"
                  label="Days to Stake"
                  variant="outlined"
                  color="primary"
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button fullWidth variant="contained" size="large" color="primary" className={classes.margin} className="stake-button">
                Stake
              </Button>
            </CardActions>
            <CardActions>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell >Start Day</TableCell>
                    <TableCell >Last Full Day</TableCell>
                    <TableCell >End Day</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell  >1</TableCell>
                  <TableCell >--</TableCell>
                  <TableCell >--</TableCell>
                </TableBody>
              </Table>
            </CardActions>
          </Card>

          <h1 className="h1-heading">Daily Dividents Charts</h1>
          <Card className="auction_card daily-div-chart">
            <CardActionArea>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Current Divident Pool:
             </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography className="color-black">
                Last updated: 0s ago
             </Typography>
            </CardActions>
          </Card>

          <div className="auction-faq" >

            <h1 className="h1-heading">Staking FAQ</h1>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="color-black">What is staking?</Typography>
              </AccordionSummary>
              <AccordionDetails  >

                <Typography className="color-black">
                  You can stake your DSP tokens for a fixed number of days to earn interest on them. Make sure to stake more than 5 days to be eligible for bonus days rewards. At the end of every day the daily stake pool of DSP tokens will be calculated and allocated proportionally between all the open stakes. The allocated DSP tokens and TRX will be available for users to withdraw when the stake ends.
        </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"

              >
                <Typography className="color-black">How is stake pool calculated?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="color-black">
                  [DSP supply * 50000 / 5.42% inflation per year ], this daily pool will be distributed between all the Stakers as their stake interest.
        </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className="color-black">Bonus for staking?</Typography>
              </AccordionSummary>
              <Typography className="color-black">
                You get a bonus reward for your stake, based on the amount and time that you are staking
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
                <Typography className="color-black">What is a reward day?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="color-black">
                  Every stake will get a bonus day every 5 days, stakes get 2X interest on bonus days. Example: creating a stake on day 4 for 15 days gives this stake 3 bonus days on days 10,15, and 20.       </Typography>

              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className="color-black">What if I end my stake early?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="color-black">
                  You will get a penalty equal to the profit of half the days you committed to.
     </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className="color-black">Do I grt TRON dividents for staking?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="color-black">
                  Yes! One of the benefits of Staking DSP is TRON dividends. At the end of each day a TRON dividends pool will be calculated and allocated to all the open stakes based on their stake amount. The dividends pool comes from the daily auction lobby total entry amount.
     </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className="color-black">How is dividents pool calculated?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="color-black">
                  95% of all TRX that enters the daily Auction Lobby is pooled and distributed back out to Stakers.
     </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className="color-black">When I receive my TRON dividents?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="color-black">
                  You will receive your TRX dividends after you exit your stake position.
     </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

        </div>

        <div className="col-md-8" style={{ paddingTop: '11px' }} >
          <Container maxWidth xs={1200} >
            <h1 className="h1-heading">My Active Stakes</h1>
            <TableContainer component={Paper} className="table-contaiiner">
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
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
                    <TableRow key={row.start}>
                      <TableCell component="th" scope="row">
                        {row.start}
                      </TableCell>
                      <TableCell >{row.end}</TableCell>
                      <TableCell >{row.progress}</TableCell>
                      <TableCell >{row.stakedAmount}</TableCell>
                      <TableCell >{row.shares}</TableCell>
                      <TableCell >{row.dividents}</TableCell>
                      <TableCell >{row.bonusDay}</TableCell>
                      <TableCell >{row.paidAmount}</TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell rowSpan={1} />
                    <TableCell colSpan={2}>Row per page:</TableCell>
                    <TableCell colSpan={1}>
                      <TextField
                        id="standard-select-currency-native"
                        select
                        value={currency}
                        onChange={handleChange}
                        SelectProps={{
                          native: true,
                        }}
                      >
                        {currencies.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </TableCell>
                    <TableCell colSpan={1} align="left">-</TableCell>
                    <TableCell colSpan={1}> <ChevronLeftIcon /></TableCell>
                    <TableCell colSpan={1}> <ChevronRightIcon /></TableCell>

                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <h1 className="h1-heading">My Ended Stakes</h1>
            <TableContainer component={Paper} className="table-container">
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
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
                    <TableRow key={row.start}>
                      <TableCell component="th" scope="row">
                        {row.start}
                      </TableCell>
                      <TableCell >{row.end}</TableCell>
                      <TableCell >{row.progress}</TableCell>
                      <TableCell >{row.stakedAmount}</TableCell>
                      <TableCell >{row.shares}</TableCell>
                      <TableCell >{row.dividents}</TableCell>
                      <TableCell >{row.bonusDay}</TableCell>
                      <TableCell >{row.paidAmount}</TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell rowSpan={1} />
                    <TableCell colSpan={2}>Row per page:</TableCell>
                    <TableCell colSpan={1}>
                      <TextField
                        id="standard-select-currency-native"
                        select
                        value={currency}
                        onChange={handleChange}
                        SelectProps={{
                          native: true,
                        }}
                      >
                        {currencies.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </TableCell>
                    <TableCell colSpan={1} align="left">-</TableCell>
                    <TableCell colSpan={1}> <ChevronLeftIcon /></TableCell>
                    <TableCell colSpan={1}> <ChevronRightIcon /></TableCell>

                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Typography component="div" />
          </Container>
        </div>

      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default Stake;