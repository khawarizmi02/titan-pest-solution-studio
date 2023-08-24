import { defineField, defineType } from "sanity";

export default defineType({

  name: 'news',
  title: 'News & Tips',
  type: 'document',
  
  fields: [

    defineField({
      name: 'image',
      title: 'Page Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeStep: 15,
      },
    }),

    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'string',
    }),

    defineField({
      name: 'subtopics',
      title: 'Subtopics',
      type: 'array',
      of: [
        {
          name: 'subtopicDetails',
          title: 'Subtopic Details',
          type: 'object',
          fields: [
            {
              name: 'subtopicName',
              title: 'Subtopic Name',
              type: 'string',
            },
            {
              name: 'subtopicDescription',
              title: 'Subtopic Description',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ]
        }
      ]
    }),
  ]
})
