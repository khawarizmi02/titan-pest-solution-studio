import {defineType, defineField} from 'sanity'

export default defineType({
	name: 'areaCover',
	title: 'Area Cover',
	type: 'document',

	fields: [
		defineField({
			name: 'region',
			title: 'Region',
			type: 'string',
		}),

		defineField({
			name: 'areas',
			title: 'Areas',
			type: 'array',
			of: [
        {
          type: 'object',
          name: 'area',
          title: 'Area',
          fields: [
            {
              name: 'areaName',
              title: 'Area Name',
              type: 'string',
            },
          ],
        },
      ],
		}),

	],

	preview: {
		select: {
			title: 'region',
		},

		prepare(selection) {
			const {title} = selection

			return {
				title: title,
			}
		},
	},
})
