import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <p>Synonyms:</p>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
