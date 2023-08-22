import { CollectionConfig } from 'payload/types';

const Feeds: CollectionConfig = {
  slug: 'feeds',
  labels: {
    singular: "Feed",
    plural: "Feeds",
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

export default Feeds;