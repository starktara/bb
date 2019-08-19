import React from "react";

const YearWidget = props => {
  const yearArray = [];

  for (let i = props.endYear; i >= props.startYear; i--) {
    yearArray.push(
      <li key={i}>
        <label>
          <input type="checkbox" className="filled-in" />
          <span>{i}</span>
        </label>
      </li>
    );
  }

  return (
    <div className="YearWidget">
      <h3 className="WidgetTitle">
        <a
          data-toggle="collapse"
          href="#widget-body-1"
          role="button"
          aria-expanded="true"
          aria-controls="widget-body-1"
        >
          Manufacturing Year
        </a>
      </h3>
      <div className="WidgetBody">
        <ul className="list">{yearArray}</ul>
        <br className="clr" />
      </div>
    </div>
  );
};

export default YearWidget;
