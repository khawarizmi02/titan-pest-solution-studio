import { defineField, defineType } from "sanity";

export default defineType({

  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',

  fields : [
    
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),

    defineField({
      name: 'title',
      title: 'Title (Who?)',
      type: 'string',
    }),
    
    defineField({
      name: 'image',
      title: 'Person Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'feedback',
      title: 'Feedback',
      type: 'text',
    }),
  ]
})
