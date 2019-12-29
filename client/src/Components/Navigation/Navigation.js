import React from "react";
import Grid from "@material-ui/core/Grid";

import "./Navigation.css";
import CityWidget from "./Widgets/CityWidget";
import YearWidget from "./Widgets/YearWidget";
import BudgetWidget from "./Widgets/BudgetWidget";
import BrandWidget from "./Widgets/BrandWidget";
import KmWidget from "./Widgets/KmWidget/KmWidget";
import {BRANDS} from '../../shared/mappings/brands';

const Navigation = () => {
  return (
    <Grid
      item
      component="aside"
      xs={12}
      sm={12}
      md={3}
      lg={3}
      className="filter"
    >
      <h5>Filter by</h5>
      <div className="filterSec">
        <CityWidget />
        <BudgetWidget budget={[0, 15000, 25000, 35000, 45000, 55000, 100000]} />
        <BrandWidget
          brands={BRANDS}
        />
        <YearWidget startYear={2004} endYear={2019} />
        <KmWidget />
      </div>
    </Grid>
  );
};

export default Navigation;
