import React from "react";

const BrandWidget = props => {
  const brandArray = props.brands.map((brand, index) => {
    return (
      <li key={index}>
        <label>
          <input type="checkbox" className="filled-in" />
          <span>{brand}</span>
        </label>
      </li>
    );
  });

  return (
    <div className="BrandWidget">
      <h3 className="WidgetTitle">
        <a
          data-toggle="collapse"
          href="#widget-body-1"
          role="button"
          aria-expanded="true"
          aria-controls="widget-body-1"
        >
          Brand
        </a>
      </h3>
      <div className="WidgetBody">
        <ul className="list">{brandArray}</ul>
      </div>
    </div>
  );
};

export default BrandWidget;
