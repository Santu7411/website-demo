import { CollectionConfig } from 'payload/types';

const Forms: CollectionConfig = {
  slug: 'forms',
  labels: {
    singular: "Form",
    plural: "Forms",
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

export default Forms;