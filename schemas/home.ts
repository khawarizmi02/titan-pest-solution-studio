import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',

  fields: [
    defineField({
      name: 'tagLine',
      title: 'Tag Line',
      type: 'text',
    }),

    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'text',
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
  ],

  preview: {
    select: {
      title: 'tagLine',
    },
  },
})
