import Gallery from '../components/gallery'
import Hero from '../components/hero'

const iconClass =
  'w-20 h-20'

function SofaIcon() {
  return (
    <svg
      className={
        iconClass
      }
      preserveAspectRatio="xMidYMid meet"
      data-bbox="21 47 160 107"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="21 47 160 107"
      height="200"
      width="200"
      data-type="color"
      role="presentation"
      aria-hidden="true"
    >
      <defs></defs>
      <g>
        <path
          d="M39.824 72.176v-6.294C39.824 55.454 48.25 47 58.647 47h84.706c10.396 0 18.823 8.454 18.823 18.882v6.294H181v69.236h-18.824V154h-9.411v-12.588H49.235V154h-9.411v-12.588H21V72.176h18.824zm0 9.442h-9.412v50.352h141.176V81.618h-9.412v28.322H39.824V81.618zm56.47 18.882V56.441H58.647c-5.198 0-9.412 4.227-9.412 9.441V100.5h47.06zm9.412-44.059V100.5h47.059V65.882c0-5.214-4.214-9.44-9.412-9.44h-37.647z"
          fill="#121212"
          data-color="1"
        ></path>
      </g>
    </svg>
  )
}

function BedIcon() {
  return (
    <svg
      className={
        iconClass
      }
      preserveAspectRatio="xMidYMid meet"
      data-bbox="20 47 160 107"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="20 47 160 107"
      height="200"
      width="200"
      data-type="color"
      role="presentation"
      aria-hidden="true"
    >
      <defs></defs>
      <g>
        <path
          fill="#121212"
          d="M38.824 141.412H20v-37.765c0-10.428 8.428-18.882 18.824-18.882V47h122.352v37.765c10.396 0 18.824 8.454 18.824 18.882v37.765h-18.824V154h-9.411v-12.588H48.235V154h-9.411v-12.588zm9.411-56.647h103.53V56.44H48.235v28.324zM29.412 131.97h141.176v-28.324c0-5.214-4.214-9.441-9.412-9.441H38.824c-5.198 0-9.412 4.227-9.412 9.441v28.324z"
          data-color="1"
        ></path>
      </g>
    </svg>
  )
}

function BathIcon() {
  return (
    <svg
      className={
        iconClass
      }
      preserveAspectRatio="xMidYMid meet"
      data-bbox="21 36.054 160 127.946"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="21 36.054 160 127.946"
      height="200"
      width="200"
      data-type="color"
      role="presentation"
      aria-hidden="true"
    >
      <defs></defs>
      <g>
        <path
          d="M30.796 91.95V65.162c0-8.036 3.116-15.34 8.199-20.755 5.477-5.835 13.237-8.132 21.842-8.132h9.143v.372a27.803 27.803 0 0 1 28.808 11.735l2.733 4.065-45.975 31.107-2.749-4.088c-6.886-10.241-6.112-23.402 1.012-32.643-2.898.706-5.522 2.018-7.682 4.319a20.385 20.385 0 0 0-5.535 14.02V91.95H181v40.938c0 13.565-10.964 24.562-24.49 24.562h-1.632V164h-9.796v-6.55H56.918V164h-9.796v-6.55H45.49c-13.526 0-24.49-10.997-24.49-24.563V91.95h9.796zm0 9.825v31.112c0 8.14 6.579 14.738 14.694 14.738h111.02c8.115 0 14.694-6.598 14.694-14.737v-31.113H30.796zm34.936-52.838c-6.81 4.608-9.457 13.107-6.994 20.595L87.37 50.158c-5.99-5.103-14.829-5.83-21.639-1.221z"
          fill="#121212"
          fill-rule="evenodd"
          data-color="1"
        ></path>
      </g>
    </svg>
  )
}

function GarageIcon() {
  return (
    <svg
      className={
        iconClass
      }
      preserveAspectRatio="xMidYMid meet"
      data-bbox="21 41 160 116"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="21 41 160 116"
      height="200"
      width="200"
      data-type="color"
      role="presentation"
      aria-hidden="true"
    >
      <defs></defs>
      <g>
        <path
          d="M49.235 147.595h103.53v-9.406H49.235v9.406zm112.941 0h9.412v-97.19H30.412v97.19h9.412V72.35h122.352v75.244zm-112.94-18.811h103.529v-9.406H49.235v9.406zm0-18.811h103.529v-9.405H49.235v9.405zm0-18.81h103.529v-9.406H49.235v9.405zM21 157V41h160v116H21z"
          fill="#121212"
          data-color="1"
        ></path>
      </g>
    </svg>
  )
}

export default function BasswoodCmn() {
  const paragraphClass =
    'mb-10'
  const highlights = [
    {
      icon: SofaIcon,
      text: '1337 Sqft',
    },
    {
      icon: BedIcon,
      text: '2 Bedrooms',
    },
    {
      icon: BathIcon,
      text: '2.5 Bathrooms',
    },
    {
      icon: GarageIcon,
      text: '2 Car Garage',
    },
  ]
  return (
    <div className="">
      <div className="h-screen bg-cover bg-no-repeat bg-center mb-10  bg-[url('/basswood/19.jpg')]">
        <div className="p-10 [&>*]:pb-4 [&>*]:text-white">
          <h1 className="text-6xl mt-10">
            375 Basswood
            Common, Unit
            1
          </h1>
          <h1 className="text-4xl">
            Livermore, CA
            94551
          </h1>
          <h3 className="text-2xl">
            Resort Style
            Living at
            Sage
          </h3>
          <h2 className="text-4xl">
            Listed at
            $839,000
          </h2>
        </div>
      </div>
      <div className="mr-5 ml-5">
        <div className="flex flex-col">
          <h1 className="text-3xl mb-5 text-center">
            Home
            Information
          </h1>
          <ul className="flex flex-col items-center md:flex-row container mx-auto justify-between mb-10">
            {highlights.map(
              (h) => {
                return (
                  <li className="p-2">
                    {h.icon()}
                    <div>
                      {
                        h.text
                      }
                    </div>
                  </li>
                )
              }
            )}
          </ul>
          <div className="container mx-auto mb-10">
            <p
              className={
                paragraphClass
              }
            >
              This is
              your dream
              home! Don’t
              miss out
              this
              stunning
              end-unit
              townhouse-style
              condo with
              ample of
              sunlight
              and
              spacious
              rooms. The
              beautifully
              crafted
              open
              concept
              layout and
              modern
              design
              showcases a
              stunning
              kitchen
              complete
              with
              stainless
              steel
              appliances,
              a gas
              stove, a
              tile
              backsplash,
              and a
              peninsula
              that
              overlooks
              the
              spacious
              and
              naturally
              illuminated
              living
              room. With
              a private
              balcony
              boasting
              breathtaking
              views of
              the
              surrounding
              hills, this
              home is the
              epitome of
              luxury and
              comfort.{' '}
            </p>
            <p
              className={
                paragraphClass
              }
            >
              The unique
              location
              comes with
              a peaceful
              view
              overlooking
              the
              community
              garden, you
              can also
              enjoy a
              relaxing
              lifestyle
              with
              resort-like
              amenities
              such as a
              full-size
              swimming
              pool,
              jacuzzi,
              clubhouse,
              gym, BBQ
              area,
              playground,
              basketball
              court, yoga
              lawn, table
              tennis,
              bocce ball
              court and
              more. The
              unique
              location
              provides
              ample
              street
              parking,
              your guests
              will always
              feel
              welcome.
            </p>
            <p
              className={
                paragraphClass
              }
            >
              Not only
              does this
              property
              offer an
              attached
              2-car
              side-by-side
              garage, but
              it also
              includes a
              tankless
              water
              heater, EV
              Charger,
              and
              water-softener
              for added
              convenience.
              As if that
              wasn't
              enough, the
              location is
              unbeatable,
              with easy
              access to
              major
              routes such
              as 580 and
              84, 6 mins
              drive to
              San
              Francisco
              Premium
              Outlet,
              Costco,
              Downtown
              Livermore,
              Target, and
              a plethora
              of other
              exciting
              amenities.{' '}
            </p>
          </div>
        </div>
        <h1 className="text-3xl mb-5 text-center">
          Gallery
        </h1>
        <Gallery />
      </div>
    </div>
    // <Hero
    // backgroundImage="/hero.jpg"
    // button={{
    //   text: 'Book a Consultation',
    //   link: 'https://calendly.com/alicerealtor',
    // }}
  )
}
