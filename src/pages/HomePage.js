import Banner from "../components/HomePage/Banner";
import Collections from "../components/HomePage/Collections";
import OtherInfomation from "../components/HomePage/OtherInfo";
import TrendingProducts from "../components/HomePage/TrendingProducts";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Banner />
      <Collections />
      <TrendingProducts />
      <OtherInfomation />
    </div>
  );
};
export default HomePage;
