import { useEffect, useState } from "react"

export default function ImagePreview({ image }) {
  const [isValidImage, setIsValidImage] = useState(false)

  const checkImage = url => {
    const image = new Image()

    image.onload = () => {
      if (image.width > 0) setIsValidImage(true)
    }

    image.onerror = () => {
      setIsValidImage(false)
    }

    image.src = url
  }

  useEffect(() => {
    checkImage(image)
  }, [image])

  return <div className="preview">
    {!isValidImage
      ? <p className="error">Invalid Image URL</p>
      : <img src={image} alt="image preview" />
    }
  </div>
}