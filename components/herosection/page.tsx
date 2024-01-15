import { getHeroSection } from "lib/shopify";

export default async function HeroSection() {
    const heroData = await getHeroSection();
    
  return (
    <div>HeroSection</div>
  )
}
