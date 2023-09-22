import PropTypes from "prop-types";
import "@atoms/Buttons/buttons.css";

const LimitSelector = ({ className, func }) => {
  return (
    <div className={"inputSelector limit-selector " + className}>
      <input
        type="radio"
        id="topfive"
        name="limit"
        value="five"
        onChange={() => {
          func(5);
        }}
        defaultChecked
      />
      <label htmlFor="topfive">Top Five</label>

      <input
        type="radio"
        id="topten"
        name="limit"
        value="ten"
        onChange={() => {
          func(10);
        }}
      />
      <label htmlFor="topten">Top Ten</label>

      <input
        type="radio"
        id="toptwenty"
        name="limit"
        value="twenty"
        onChange={() => {
          func(20);
        }}
      />
      <label htmlFor="toptwenty">Top Twenty</label>

      <input
        type="radio"
        id="topfifty"
        name="limit"
        value="fifty"
        onChange={() => {
          func(50);
        }}
      />
      <label htmlFor="topfifty">Top Fifty</label>
    </div>
  );
};
LimitSelector.propTypes = {
  className: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

const TermSelector = ({ className, func }) => {
  return (
    <div className={"inputSelector term-selector " + className}>
      <input
        type="radio"
        id="shortterm"
        name="term"
        value="shortTerm"
        onChange={async () => {
          await func("short_term");
        }}
        defaultChecked
      />
      <label htmlFor="shortterm">Short Term</label>

      <input
        type="radio"
        id="mediumterm"
        name="term"
        value="mediumTerm"
        onChange={async () => {
          await func("medium_term");
        }}
      />
      <label htmlFor="mediumterm">Medium Term</label>

      <input
        type="radio"
        id="longterm"
        name="term"
        value="longTerm"
        onChange={async () => {
          await func("long_term");
        }}
      />
      <label htmlFor="longterm">Long Term</label>
    </div>
  );
};
TermSelector.propTypes = {
  className: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export { LimitSelector, TermSelector };
