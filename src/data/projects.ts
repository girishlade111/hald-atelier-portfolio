export type Project = {
  slug: string
  name: string
  type: string
  location: string
  year: string
  area: string
  status: string
  image: string
  imageAlt: string
  lead: string
  body: string[]
}

export const projects: Project[] = [
  {
    slug: 'horizon-house',
    name: 'Horizon House',
    type: 'Private Residence',
    location: 'Mallorca, ES',
    year: '2025',
    area: '380 m²',
    status: 'Completed',
    image: '/projects/horizon-house.jpg',
    imageAlt: 'A white cantilevered villa above a still pool on the Mallorcan coast',
    lead: 'A single horizontal plane held above the sea.',
    body: [
      'Horizon House is organised around one gesture: a cantilevered roof slab that shades the living spaces and frames the horizon. Below it, a sequence of white walls opens and closes to the wind, never interrupting the view.',
      'Materials were limited to local limestone, lime render and iroko timber. The pool sits flush with the terrace, so that water, stone and sky read as one continuous surface at dusk.',
    ],
  },
  {
    slug: 'fjord-chapel',
    name: 'Fjord Chapel',
    type: 'Cultural',
    location: 'Aurland, NO',
    year: '2024',
    area: '96 m²',
    status: 'Completed',
    image: '/projects/fjord-chapel.jpg',
    imageAlt: 'A small dark timber chapel on the rocky shore of a Norwegian fjord',
    lead: 'A room for silence at the edge of the water.',
    body: [
      'Commissioned by a small parish, the chapel holds thirty people and one window. The window faces the fjord; everything else is turned inward. Dark tarred cladding lets the building recede into the rock.',
      'Inside, untreated pine absorbs sound until the room itself feels like an instrument. Daylight enters only from the west, so the hour of the day is always legible on the walls.',
    ],
  },
  {
    slug: 'kiln-gallery',
    name: 'Kiln Gallery',
    type: 'Museum',
    location: 'Bornholm, DK',
    year: '2023',
    area: '1,240 m²',
    status: 'Completed',
    image: '/projects/kiln-gallery.jpg',
    imageAlt: 'A monolithic red-brick gallery cube on a coastal meadow in Bornholm',
    lead: 'A brick cube that frames the Baltic.',
    body: [
      'Bornholm’s ceramic tradition begins with its clay. The gallery is therefore built from the material it exhibits — a single brick volume on the coastal meadow, pierced by one square opening that frames the sea.',
      'The walls are a metre thick, giving the galleries a thermal mass that needs almost no climate control. Light arrives through deep reveals, softened before it ever reaches the work.',
    ],
  },
  {
    slug: 'corten-courtyard',
    name: 'Corten Courtyard',
    type: 'Housing',
    location: 'Copenhagen, DK',
    year: '2022',
    area: '4,600 m²',
    status: 'Completed',
    image: '/projects/corten-courtyard.jpg',
    imageAlt: 'A corten steel housing courtyard with pale gravel and a single birch tree',
    lead: 'Forty-two homes around one quiet room.',
    body: [
      'The block turns its back to the street and opens everything to the courtyard — a shared room of pale gravel, one birch and long benches. Weathered steel gives the facades a depth that changes with every season.',
      'Apartments are arranged so that no window looks directly into another. Privacy is achieved through geometry rather than curtains.',
    ],
  },
  {
    slug: 'dune-pavilion',
    name: 'Dune Pavilion',
    type: 'Hospitality',
    location: 'Terschelling, NL',
    year: '2021',
    area: '210 m²',
    status: 'Completed',
    image: '/projects/dune-pavilion.jpg',
    imageAlt: 'A low white pavilion half-buried in grassy dunes on the Dutch coast',
    lead: 'Half buried, entirely open.',
    body: [
      'Planning rules allowed nothing taller than the dunes — so the pavilion became one of them. A white concrete frame is set into the sand, its roof planted with the same grasses that surround it.',
      'From the beach only a thin opening is visible. Inside, the frame holds a small restaurant where the horizon sits exactly at eye level when seated.',
    ],
  },
  {
    slug: 'stillwater-cabin',
    name: 'Stillwater Cabin',
    type: 'Private Residence',
    location: 'Jämtland, SE',
    year: '2020',
    area: '54 m²',
    status: 'Completed',
    image: '/projects/stillwater-cabin.jpg',
    imageAlt: 'A black timber cabin reflected in a still Swedish forest lake at dusk',
    lead: 'Fifty-four square metres, one window, no more.',
    body: [
      'A retreat for a writer, built from black-stained local pine on a granite shelf above the lake. The plan is a single room subdivided by furniture; the window is sized to the desk and nothing else.',
      'There is no road access. Materials arrived by boat in summer and by sledge in winter, which set the building’s dimensions — every beam was carried by two people at most.',
    ],
  },
]
