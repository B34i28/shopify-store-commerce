
import { getSliderMetaObject } from "lib/shopify";
import Image from "next/image";

export default async function Slider() {
  const sliderData = await getSliderMetaObject()
  // console.log("Slider Data",sliderData);
  
  return (
    <div>
      <h1>Slider</h1>
      <div className="">
      {sliderData.map((item : any) => (
        <div className="">
          <p>Cat Name : {item.cat}</p>
          <p>Description : {item.descrption}</p>
          <div className="">
            <Image
              src={item.imageUrl} alt={item.cat} height={200} width={200}   />
          </div>

        </div>
      ))}
      </div>
    </div>
  )
}
