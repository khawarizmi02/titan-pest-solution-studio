import {SchemaTypeDefinition} from 'sanity'

import contact from './contact'
import testimonial from './testimonial'
import Services from './Services'
import serviceIntro from './serviceIntro'
import about from './about'
import library from './library'
import libraryintro from './libraryIntro'
import news from './news'
import newsIntro from './newsIntro'
import home from './home'
import addresses from './addresses'
import areaCover from './areaCover'

export const schemaTypes = [
  home,
  contact,
  addresses,
	areaCover,
  testimonial,
  Services,
  serviceIntro,
  about,
  library,
  libraryintro,
  news,
  newsIntro,
]
export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    home,
    contact,
    addresses,
		areaCover,
    testimonial,
    Services,
    serviceIntro,
    about,
    library,
    libraryintro,
    news,
    newsIntro,
  ],
}
