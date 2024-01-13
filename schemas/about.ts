import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Us',
  type: 'document',

  fields: [
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
    }),

    defineField({
      name: 'introImage',
      title: 'Introduction Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'vision',
      title: 'Vision',
      type: 'text',
    }),

    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'text',
    }),

    defineField({
      name: 'value',
      title: 'Value',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'image',
      title: 'Page Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'certificates',
      title: 'Certificates',
      type: 'array',
      of: [
        {
          name: 'certificate',
          title: 'Certificate',
          type: 'object',
          fields: [
            {
              name: 'certificateName',
              title: 'Certificate Name',
              type: 'string',
            },
            {
              name: 'certificateImage',
              title: 'Certificate Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    }),
  ],
})
