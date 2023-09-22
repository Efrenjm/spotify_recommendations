import PropTypes from "prop-types";
import ElementContainer from "@molecules/ElementContainer/ElementContainer";
import { Title } from "@atoms/Text/Text";

function ElementsTable(props) {
  const elem = props.type;

  if (elem) {
    const top = `Top ${props.elems.length} ${elem}`;

    let subtitles = null;
    if (elem === "tracks") {
      subtitles = props.elems.map((track) => {
        let artists = track.artists.map((artist) => {
          return artist.name;
        });
        return artists.join(" - ");
      });
    }

    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "black",
            padding: "1.5rem",
            borderRadius: "20px",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                padding: "0",
                margin: 0,
              }}
            >
              <Title>{top}</Title>
            </div>

            <img src="/icon3@2x.png" height="70px" width="70px" />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--tab-padding)",
              height: "var(--five-cards-height)",
              overflow: "auto",
            }}
          >
            {props.elems.map((elem, index) => {
              return (
                <div key={elem.id}>
                  <ElementContainer
                    id={elem.id}
                    imgSrc={elem.image}
                    title={elem.name}
                    subtitle={subtitles ? subtitles[index] : null}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

ElementsTable.propTypes = {
  type: PropTypes.string,
  elems: PropTypes.object.isRequired,
};

export default ElementsTable;
