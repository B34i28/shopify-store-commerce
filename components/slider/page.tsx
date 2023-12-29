
import { getSliderMetaObject } from "lib/shopify"
import Image from "next/image"

export default async function Slider() {
  const sliderData = await getSliderMetaObject()
  return (
    <div>
      <h1>Slider</h1>
      <div className="flex">
      {
        sliderData.map(({key}:any) =><Image src={sliderData.value} alt={key} width={100} height={100} />)
      }
      </div>
    </div>
  )
}
