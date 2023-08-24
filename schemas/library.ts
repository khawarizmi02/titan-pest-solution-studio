import { defineField, defineType } from "sanity";

export default defineType({

  name: 'library',
  title: 'Pest Library',
  type: 'document',
  fields: [

    defineField({
      name: 'pestName',
      title: 'Pest Name',
      type: 'string',
    }),

    defineField({
      name: 'info',
      title: 'Pest Info',
      type: 'text',
    }),
    
    defineField({
      name: 'lifecycle',
      title: 'Lifecycle',
      type: 'text',
    }),
    
    defineField({
      name: 'importance',
      title: 'Pest Importance',
      type: 'text',
    }),
    
    defineField({
      name: 'pestImage',
      title: 'Pest Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ]
})
