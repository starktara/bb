import React from "react";
import Grid from "@material-ui/core/Grid";

import "./Navigation.css";
import CityWidget from "./Widgets/CityWidget";
import YearWidget from "./Widgets/YearWidget";
import BudgetWidget from "./Widgets/BudgetWidget";
import BrandWidget from "./Widgets/BrandWidget";
import KmWidget from "./Widgets/KmWidget/KmWidget";

const Navigation = () => {
  return (
    <Grid
      item
      component="aside"
      // lg={4}
      // md={4}
      // sm={12}
      xs={3}
      className="filter"
    >
      <h5>Filter by</h5>
      <div className="filterSec">
        <CityWidget />
        <BudgetWidget budget={[0, 15000, 25000, 35000, 45000, 55000, 100000]} />
        <BrandWidget
          brands={[
            "Hero",
            "Honda",
            "TVS",
            "Yamaha",
            "Suzuki",
            "UM Motorcycles",
            "Piaggio",
            "KTM"
          ]}
        />
        <YearWidget startYear={2004} endYear={2019} />
        <KmWidget />
      </div>
    </Grid>
  );
};

export default Navigation;
