import "./StaticPage.css";

export default function StaticPage(props) {
  return (
    <div className="row ">
      <div className="col-12">
        <div className="row staticPage">
          {props.children}
        </div>
      </div>
    </div>
  );
}
