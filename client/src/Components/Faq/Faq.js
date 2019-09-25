import React from 'react';
import './Faq.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    body: {
        backgroundColor: '#f7f7f7'
    },
    banner: {
      marginTop: theme.spacing(5)
    },
    paper: {
        margin: theme.spacing(3,0),
        padding: theme.spacing(3)
    },
    faqHeading: {
        fontSize: 22,
        letterSpacing: 0.65,
        color: '#ff0000',
        fontWeight: 600
    },
    faqSteps: {
        fontSize: 17,
        letterSpacing: 0.53,
        color: '#232b2b',
        marginBottom: 30
    },
    faqQuestion:{
        fontSize: 18,
        color: '#232b2b',
        letterSpacing: 0.53,
        fontWeight: 600
    }
  }));


const Faq = (props) => {
    const classes = useStyles();
    return (
        <div id="faq" className={classes.body}>
            <Header />
                <Grid container component="div" direction="row" justify="center" className={classes.banner}>
                    <Grid item xs={11} sm={11} md={11} lg={11}>
                        <Banner
                            navigation="FAQs"
                            heading="Frequently Asked Questions"
                            text=""
                        />
                    </Grid>
                </Grid>
                <Grid container component="div" direction="row" justify="center">
                    <Grid item xs={11} sm={11} md={11} lg={11}>
                        <Paper className={classes.paper}>
                            <h5 id="faqHeading" className={classes.faqHeading}>
                                How do i select a suitable two-wheeler for me?
                            </h5>
                            <p className={classes.faqSteps}>
                                Step 1: Select the category of the two-wheeler you want to buy out of Motorcycles, Scooters and High-End Motorcycles
                            </p>
                            <p className={classes.faqSteps}>
                                Step 2: Use the filter for City, Manufactruring Year, Budget, Brand and KMs driven for the chosen category of the two-wheeler.
                            </p>
                            <p className={classes.faqSteps}>
                                Step 3: You will be shown multiple options to select from for the two-wheeler you want to buy, select any of then to see further.
                            </p>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                className={classes.faqQuestion}
                                >
                                I want to see two wheeler nearest to my location how do i do it?
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                className={classes.faqQuestion}
                                >
                                I liked on of the listed Bike and want to see it, what should i do next?
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                className={classes.faqQuestion}
                                >
                                How can i be assured of the vehicle's quality? What if i see some issue in the bike after purchasing?
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                className={classes.faqQuestion}
                                >
                                I like the bike but, have some financial issues which are stopping me from purchasing the bike right now.
                                Can you help me with this
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                className={classes.faqQuestion}
                                >
                                How can i buy the bike at low cost EMI?
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                className={classes.faqQuestion}
                                >
                                I have decided to buy a bike but, have some doubts about document transfer... Will it be Hassle-free?
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Paper>
                    </Grid>
                </Grid>
            <Footer />
        </div>
    )
}

export default Faq;