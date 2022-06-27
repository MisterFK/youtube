import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../Tools/requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("order/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (error) {}
    };
    getIncome();
  }, []);
  console.log(perc);

  console.log(income);

  const arrowDirection = (perc) => {
    return perc >= 0 ? (
      <ArrowUpward className="featuredIcon" />
    ) : (
      <ArrowDownward className="featuredIcon negative" />
    );
  };

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenu</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{income[1]?.total}€</span>
          <span className="featuredMoneyRate">
            {perc > 1 ? "+" : ""}
            {Math.floor(perc)}% {arrowDirection(perc)}
          </span>
        </div>
        <span className="featuredSub">Comparaison au mois précédent</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Ventes</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Comparaison au mois précédent</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Coût</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Comparaison au mois précédent</span>
      </div>
    </div>
  );
}
