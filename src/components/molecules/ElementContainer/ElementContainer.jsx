import PropTypes from "prop-types";
import { CardText, CardTitle } from "@atoms/Text/Text";

// import "./ElementContainer.css"

function ElementContainer({ imgSrc, title, subtitle, index }) {
  const cardWidth = 320;
  const xGap = 10;
  const imgDim = 42;
  const textWidth = cardWidth - xGap * 1.5 - imgDim;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "var(--card-height)",
        widt: "var(--card-width)",
        alignItems: "center",
        padding: `0 ${xGap}px`,
        gap: xGap,
        backgroundColor: "var(--green)",
        borderRadius: "15px",
      }}
    >
      <h2
        style={{
          width: "2rem",
          textAlign: "center",
        }}
      >
        {index + 1}
      </h2>
      <img src={imgSrc} height={imgDim} width={imgDim} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: textWidth,
          overflowX: "hidden",
        }}
      >
        <CardTitle className="elem">{title}</CardTitle>
        <CardText>{subtitle}</CardText>
      </div>
    </div>
  );
}
ElementContainer.propTypes = {
  children: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  index: PropTypes.number,
};

export default ElementContainer;
