import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsIntro',
  title: 'News Intro',
  type: 'document',

  fields: [
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [{type: 'block'}] as any,
    }),
  ],
})
