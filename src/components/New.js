import Booster from './../assets/booster.jpg';

export default function New() {
  return (
    <div className="col col-lg-12 novinka">
      <div className="row ">
        <div className="col-3">
          <img src={Booster} className="card-img-top" alt="booster.jpg" />
        </div>
        <div className="col-7 produktItem__text">

          <h5 className="card-title">
            Core Set 2021 booster</h5>
          <p className="card-text">
            Booster obsahuje 15 náhodných karet ze sady Core Set 2021, jedna z nich může být foilová. Navíc je zde
            token nebo karta rad & triků.
            Booster obsahuje 15 náhodných karet ze sady Core Set 2021, jedna z nich může být foilová. Navíc je zde
            token nebo karta rad & triků.
            Booster obsahuje 15 náhodných karet ze sady Core Set 2021, jedna z nich může být foilová. Navíc je zde
            token nebo karta rad & triků.
        </p>
        </div>
        <div className="col-2  produktItem__cena">

          <a href="#" className="btn btn-primary">detail</a>
        </div>
      </div>
    </div>
  );
}
