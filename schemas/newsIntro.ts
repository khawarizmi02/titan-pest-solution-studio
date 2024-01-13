import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsIntro',
  title: 'News Intro',
  type: 'document',

  fields: [
    // defineField({
    //   name: 'title',
    //   title: 'Title',
    //   type: 'string',
    // }),

    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [{type: 'block'}] as any,
    }),

    // defineField({
    // 	name: 'image',
    // 	title: 'Page Image',
    // 	type: 'image',
    // 	options: {
    // 		hotspot: true,
    // 	},
    // }),
  ],
})
