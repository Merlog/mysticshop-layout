import L1menu from "./../components/L1menu";
import L2menu from "./../components/L2menu";
import Carousel from "./../components/Carousel";

export default function HomepagePage() {
  return (
    <div class="container">
      <div class="row">
        <div class="col col-lg-3 ">
          <L1menu />
          <L2menu />
        </div>
        <Carousel />
      </div>
    </div>
  );
}
