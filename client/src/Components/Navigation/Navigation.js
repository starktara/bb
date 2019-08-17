import React from "react";

import './Navigation.css'
import CityWidget from "./Widgets/CityWidget";
import YearWidget from "./Widgets/YearWidget";
import BudgetWidget from "./Widgets/BudgetWidget";
import BrandWidget from "./Widgets/BrandWidget";
import KmWidget from "./Widgets/KmWidget/KmWidget";

const Navigation = () => {
    return (
        <div className="row">
            <aside id="slide-out" className="filter col s12 m4 l4 xl3">
              <h5>Filter by</h5>
              <div className="filterSec" >
                <CityWidget />
                <YearWidget startYear={2004} endYear={2019}/>
                <BudgetWidget budget={[0, 15000, 25000, 35000, 45000, 55000, 100000]}/>
                <BrandWidget brands={['Hero', 'Honda', 'TVS', 'Yamaha', 'Suzuki', 'UM Motorcycles', 'Piaggio', 'KTM']} />
                <KmWidget />
            </div>
            </aside>
          </div>
    );
}

export default Navigation;