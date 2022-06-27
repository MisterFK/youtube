import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState } from "react";
import { useMemo } from "react";
import { convertMonth } from "../../Tools/tools";
import { useEffect } from "react";
import { userRequest } from "../../components/Tools/requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(() => convertMonth, []);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/user/stats");
        res.data.map((item) => {
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Nouveaux: item.total },
          ]);
        });
      } catch (error) {}
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="Nouveaux Utilisateurs"
        grid
        dataKey="Nouveaux"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
