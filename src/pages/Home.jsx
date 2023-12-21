import HomeHeader from "../ui/HomeHeader";
import HomeSectionOne from "../ui/HomeSectionOne";
import HomeSectionTwo from "../ui/HomeSectionTwo";
import HomeSectionThree from "../ui/HomeSectionThree";
import HomeSectionFour from "../ui/HomeSectionFour";
import HomeSectionFive from "../ui/HomeSectionFive";

function Home() {
  return (
    <div className="font-sora">
      <HomeHeader />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
    </div>
  );
}

export default Home;
