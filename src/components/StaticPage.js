export default function StaticPage(props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="white-box-wrapper">{props.children}</div>
      </div>
    </div>
  );
}
