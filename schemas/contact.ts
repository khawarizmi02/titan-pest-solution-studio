import { defineType, defineField } from "sanity";

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',

  fields: [

    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    
    defineField({
      name: 'contactNum',
      title: 'Contact Number',
      type: 'string',
    }),
    
    defineField({
      name: 'pestType',
      title: 'Pest Type',
      type: 'string',
    }),
    
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
    })
  ],

  preview: {
    select: {
      title : 'name',
      contactNumber : 'contactNum',
      emailAddress : 'email',
    },

    prepare(selection) {
      const { title, contactNumber, emailAddress } = selection;

      return {
        title: title,
        subtitle: `${contactNumber}, ${emailAddress}`,
      };
    },
  },
})
