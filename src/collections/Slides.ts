import { CollectionConfig } from 'payload/types';

const Slides: CollectionConfig = {
  slug: 'slides',
  labels: {
    singular: "Slide",
    plural: "Slides",
  },    
  admin: {
    useAsTitle: 'title',
    group: 'MP CMS',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    }
  ],
}

export default Slides;