import Blog from "@/components/Blog";
import BlogPost from "@/components/BlogPost";
import Comparisons from "@/components/Comparisons";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Switch from "@/components/Switch";
import SwitchingEnergy from "@/components/SwitchingEnergy";
import Testimonials from "@/components/Testimonials";
import Trust from "@/components/Trust";
import Utilities from "@/components/Utilities";
import Image from "next/image";

export default function Home() {
  return (
<div>
  {/* <Hero/>
  <Trust/>
  <SwitchingEnergy/>
  <Switch/>
  <Comparisons/>
  <Utilities/>
  <Testimonials/>
  <Faqs/>
  <Newsletter/>
  <Footer/> */}
  <BlogPost/>
</div>
  );
}
