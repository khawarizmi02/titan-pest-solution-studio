import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'addresses',
  title: 'Addresses',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),

    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),

    defineField({
      name: 'contactNum',
      title: 'Contact Number',
      type: 'string',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      contactNumber: 'contactNum',
      emailAddress: 'email',
    },

    prepare(selection) {
      const {title, emailAddress} = selection

      return {
        title: title,
        subtitle: `${emailAddress}`,
      }
    },
  },
})
