import "./ImageResults.css";

function ImageResults(props) {
  console.log(props);
  if (props.results) {
    return (
      <section className="ImageResults">
        <div className="row">
          {props.results.map(function (image, index) {
            return (
              <div className="col-4 mb-1">
                <img
                  src={image.src.landscape}
                  alt={image.alt}
                  key={index}
                  className="img-fluid"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

export default ImageResults;
