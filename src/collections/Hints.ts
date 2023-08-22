import { CollectionConfig } from 'payload/types';

const Hints: CollectionConfig = {
  slug: 'hints',
  labels: {
    singular: "Hint",
    plural: "Hints",
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

export default Hints;