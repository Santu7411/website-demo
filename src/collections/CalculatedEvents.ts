import { CollectionConfig } from 'payload/types';

const CalculatedEvents: CollectionConfig = {
  slug: 'calculatedEvents',
  labels: {
    singular: "Calculated Event",
    plural: "Calculated Events",
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

export default CalculatedEvents;