import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',

  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'text',
    }),

    defineField({
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [{type: 'image'}, {type: 'file', options: {accept: 'video/*'}}],
    }),

    defineField({
      name: 'whyUs',
      title: 'Why Us',
      type: 'array',
      of: [
        {
          name: 'content',
          title: 'Content',
          type: 'object',
          fields: [
            {
              name: 'pointName',
              title: 'Point Name',
              type: 'string',
            },
            {
              name: 'pointImage',
              title: 'Point Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'pointText',
              title: 'Point Text',
              type: 'text',
            },
          ],
        },
      ],
    }),

    // defineField({
    // 	name: 'services',
    // 	title: 'Services',
    // 	type: 'array',
    // 	of: [{type: 'reference', to: [{type: 'Services'}]}],
    // }),

    // defineField({
    // 	name: 'library',
    // 	title: 'Library',
    // 	type: 'array',
    // 	of: [{type: 'reference', to: [{type: 'library'}]}],
    // }),

    // defineField({
    // 	name: 'news',
    // 	title: 'News',
    // 	type: 'array',
    // 	of: [{type: 'reference', to: [{type: 'news'}]}],
    // }),

    // defineField({
    // 	name: 'testimonials',
    // 	title: 'Testimonials',
    // 	type: 'array',
    // 	of: [{type: 'reference', to: [{type: 'testimonial'}]}],
    // }),
  ],
})
