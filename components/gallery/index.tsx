import Image from 'next/image'
import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss'
import 'lightgallery/scss/lg-zoom.scss'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

export default function Gallery() {
  const onInit = () => {
    console.log(
      'lightGallery has been initialized'
    )
  }
  return (
    <div className="container mx-auto columns-3 gap-2">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[
          lgThumbnail,
          lgZoom,
        ]}
      >
        {Array(39)
          .fill(0)
          .map(
            (e, i) => {
              const imageIndex =
                i + 1
              const image = `/basswood/${imageIndex}.jpg`
              return (
                <a
                  className="block mb-2"
                  href={
                    image
                  }
                >
                  <Image
                    width={
                      403
                    }
                    height={
                      226
                    }
                    alt={`Image ${i}`}
                    src={
                      image
                    }
                  />
                </a>
              )
            }
          )}
      </LightGallery>
    </div>
  )
}
