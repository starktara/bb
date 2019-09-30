import React from 'react';
import Grid from "@material-ui/core/Grid";
import headingLines from '../../assets/heading-lines.svg';
import indianRupeeRed from '../../assets/images/icons/rupee-indian-red.svg';
import bikeIcon from '../../assets/images/product/bike-img.png';
import { makeStyles } from "@material-ui/core/styles";
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import SpeedOutlinedIcon from '@material-ui/icons/SpeedOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const useStyle = makeStyles({
    icon: {
        fontSize: 16,
        color: '#a4a3a3',
    }
})


const SimilarVehicles = () => {
    const classes = useStyle();

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
    };

    return (
        <div className="similar">
            <h2>Similar Two Wheelers</h2>
            <div className="flex-center"><img src={headingLines} alt=""/></div><br />
            <Grid container component="div" direction="row">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                <Carousel responsive={responsive}>
                    <div className="Product">
                        <img src={bikeIcon} alt="" />
                        <div className="detail">
                            <h3>Bajaj Platina </h3>
                            <p className="price"><img className="rupees" src={indianRupeeRed} alt=""/> 17,500</p>
                            <ul className="detailPoints">
                                <li className="year">
                                    <CalendarTodayOutlinedIcon className={classes.icon}/>
                                    <span>2007</span>
                                </li>
                                <li className="km">
                                    <SpeedOutlinedIcon className={classes.icon}/>
                                    <span>25,000 KMs</span>
                                </li>
                                <li className="cc">
                                    <OfflineBoltOutlinedIcon className={classes.icon}/>
                                    <span>99 CC</span>
                                </li>
                                <li className="owner">
                                    <PersonOutlinedIcon className={classes.icon}/>
                                    <span>1<sup>st</sup> Owner</span>
                                </li>
                            </ul><br className="clr"/>
                                <p className="location">Baner, Pune</p>
                        </div>
                    </div>
                    <div className="Product">
                        <img src={bikeIcon} alt="" />
                        <div className="detail">
                            <h3>Bajaj Platina </h3>
                            <p className="price"><img className="rupees" src={indianRupeeRed} alt=""/> 17,500</p>
                            <ul className="detailPoints">
                                <li className="year">
                                    <CalendarTodayOutlinedIcon className={classes.icon}/>
                                    <span>2007</span>
                                </li>
                                <li className="km">
                                    <SpeedOutlinedIcon className={classes.icon}/>
                                    <span>25,000 KMs</span>
                                </li>
                                <li className="cc">
                                    <OfflineBoltOutlinedIcon className={classes.icon}/>
                                    <span>99 CC</span>
                                </li>
                                <li className="owner">
                                    <PersonOutlinedIcon className={classes.icon}/>
                                    <span>1<sup>st</sup> Owner</span>
                                </li>
                            </ul><br className="clr"/>
                                <p className="location">Baner, Pune</p>
                        </div>
                    </div>
                    <div className="Product">
                        <img src={bikeIcon} alt="" />
                        <div className="detail">
                            <h3>Bajaj Platina </h3>
                            <p className="price"><img className="rupees" src={indianRupeeRed} alt=""/> 17,500</p>
                            <ul className="detailPoints">
                                <li className="year">
                                    <CalendarTodayOutlinedIcon className={classes.icon}/>
                                    <span>2007</span>
                                </li>
                                <li className="km">
                                    <SpeedOutlinedIcon className={classes.icon}/>
                                    <span>25,000 KMs</span>
                                </li>
                                <li className="cc">
                                    <OfflineBoltOutlinedIcon className={classes.icon}/>
                                    <span>99 CC</span>
                                </li>
                                <li className="owner">
                                    <PersonOutlinedIcon className={classes.icon}/>
                                    <span>1<sup>st</sup> Owner</span>
                                </li>
                            </ul><br className="clr"/>
                                <p className="location">Baner, Pune</p>
                        </div>
                    </div>
                    <div className="Product">
                        <img src={bikeIcon} alt="" />
                        <div className="detail">
                            <h3>Bajaj Platina </h3>
                            <p className="price"><img className="rupees" src={indianRupeeRed} alt=""/> 17,500</p>
                            <ul className="detailPoints">
                                <li className="year">
                                    <CalendarTodayOutlinedIcon className={classes.icon}/>
                                    <span>2007</span>
                                </li>
                                <li className="km">
                                    <SpeedOutlinedIcon className={classes.icon}/>
                                    <span>25,000 KMs</span>
                                </li>
                                <li className="cc">
                                    <OfflineBoltOutlinedIcon className={classes.icon}/>
                                    <span>99 CC</span>
                                </li>
                                <li className="owner">
                                    <PersonOutlinedIcon className={classes.icon}/>
                                    <span>1<sup>st</sup> Owner</span>
                                </li>
                            </ul><br className="clr"/>
                                <p className="location">Baner, Pune</p>
                        </div>
                    </div>
                    <div className="Product">
                        <img src={bikeIcon} alt="" />
                        <div className="detail">
                            <h3>Bajaj Platina </h3>
                            <p className="price"><img className="rupees" src={indianRupeeRed} alt=""/> 17,500</p>
                            <ul className="detailPoints">
                                <li className="year">
                                    <CalendarTodayOutlinedIcon className={classes.icon}/>
                                    <span>2007</span>
                                </li>
                                <li className="km">
                                    <SpeedOutlinedIcon className={classes.icon}/>
                                    <span>25,000 KMs</span>
                                </li>
                                <li className="cc">
                                    <OfflineBoltOutlinedIcon className={classes.icon}/>
                                    <span>99 CC</span>
                                </li>
                                <li className="owner">
                                    <PersonOutlinedIcon className={classes.icon}/>
                                    <span>1<sup>st</sup> Owner</span>
                                </li>
                            </ul><br className="clr"/>
                                <p className="location">Baner, Pune</p>
                        </div>
                    </div>
                </Carousel>
                </Grid>
            </Grid>
        </div>
    )
}

export default SimilarVehicles;