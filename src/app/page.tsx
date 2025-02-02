import FeaturedProducts from "./components/feature";
import HeroSection from "./components/hero";
import LatestBlog from "./components/latestblog";
import LatestProducts from "./components/latestproduct";
import ProductFeatures from "./components/productfeatures";
import ShopexOffer from "./components/shopexoffer";

import SubscribeSection from "./components/subcribesection";
import TopCategories from "./components/topcategories";
import TrendingProducts from "./components/trendingproducts";

const Home = async () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <ShopexOffer />
      <ProductFeatures />
      <TrendingProducts />
      <TopCategories />
      <SubscribeSection />
      <LatestBlog /> 
    </div>
  );
};

export default Home;









