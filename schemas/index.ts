import { SchemaTypeDefinition } from 'sanity'

import contact from './contact'
import testimonial from './testimonial'
import Services from './Services'
import about from './about'
import library from './library'
import news from './news'

export const schemaTypes = [contact, testimonial, Services, about, library, news]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contact, testimonial, Services, about, library, news],
}
