import { defineField, defineType } from "sanity";

export default defineType({

  name: 'services',
  title: 'Services',
  type: 'document',

  fields : [
    
    defineField({
      name: 'name',
      title: 'Pest Name',
      type: 'string',
    }),
    
    defineField({
      name: 'image',
      title: 'Pest Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
    }),
    
    defineField({
      name: 'servicesMethod',
      title: 'Services Method',
      type: 'array',
      of: [
        {
          name: 'methodDetails',
          title: 'Method Details',
          type: 'object',
          fields: [
            {
              name: 'methodImage',
              title: 'Method Image',
              type: 'image',
              options: {
                hotspot: true,
              }
            },
            {
              name: 'methodName',
              title: 'Method Name',
              type: 'string',
            },
            {
              name: 'methodDescription',
              title: 'Method Description',
              type: 'text',
            },
          ]
        }
      ]
    }),
  ]
})

