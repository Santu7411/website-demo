import { CollectionConfig } from 'payload/types';

const Achievements: CollectionConfig = {
  slug: 'achievements',
  labels: {
    singular: "Achievement",
    plural: "Achievements",
  },    
  admin: {
    useAsTitle: 'title',
    group: 'Promotion',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    }
  ],
}

export default Achievements;