import React from "react";

const BudgetWidget = props => {
  const budgetArray = [];

  for (let i = 0; i < props.budget.length - 1; i++) {
    budgetArray.push(
      <li key={i}>
        <label>
          <input
            type="checkbox"
            className="filled-in checkbox-red checkbox-indigo"
          />
          <span>
            <strong>₹</strong>{" "}
            {props.budget[i] === 0 ? props.budget[i] : props.budget[i] + 1} -{" "}
            <strong /> {props.budget[i + 1]}
          </span>
        </label>
      </li>
    );
  }

  budgetArray.push(
    <li key={props.budget.length - 1}>
      <label>
        <input type="checkbox" className="filled-in" />
        <span>
          <strong>₹</strong> {props.budget[props.budget.length - 1] + 1} +
        </span>
      </label>
    </li>
  );

  return (
    <div className="BudgetWidget">
      <h3 className="WidgetTitle">
        <a
          data-toggle="collapse"
          href="#widget-body-1"
          role="button"
          aria-expanded="true"
          aria-controls="widget-body-1"
        >
          Budget
        </a>
      </h3>
      <div className="WidgetBody">
        <ul className="list">{budgetArray}</ul>
      </div>
    </div>
  );
};

export default BudgetWidget;
