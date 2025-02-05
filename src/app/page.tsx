
import BestSelling from "./components/bestselling";
import FeaturedProducts from "./components/feature";
import HeroSection from "./components/hero";
import LatestBlog from "./components/latestblog";
import LatestProducts from "./components/latestproduct";
import ProductFeatures from "./components/productfeatures";
import SubscribeSection from "./components/subcribesection";
import TrendingProducts from "./components/trendingproducts";



const Home = async () => {
  // const authentication = await auth();
  // console.log("authentication", authentication);

//   const user = await currentUser();
//  const metadata = user?.publicMetadata;
//  if (metadata?.success?.[0] === '/') {

//  } 
//  else {
//   redirect('/not-authorized');
//  }


  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <ProductFeatures />
      <TrendingProducts />
      <BestSelling/>
      <SubscribeSection />
      <LatestBlog /> 
    </div>
  );
};

export default Home;









