import L1menu from "./../components/L1menu";
import L2menu from "./../components/L2menu";

export default function HomepagePage() {
  return (
    <div class="container" style={{ marginTop: "360px" }}>
      <div class="row">
        <L1menu />
        <L2menu />
      </div>
    </div>
  );
}
