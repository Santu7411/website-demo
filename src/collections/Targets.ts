import { CollectionConfig } from 'payload/types';

const Targets: CollectionConfig = {
  slug: 'targets',
  labels: {
    singular: "Target",
    plural: "Targets",
  },    
  admin: {
    useAsTitle: 'title',
    group: 'Settings',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    }
  ],
}

export default Targets;