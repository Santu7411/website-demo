import { CollectionConfig } from 'payload/types';

const Notifications: CollectionConfig = {
  slug: 'notifications',
  labels: {
    singular: "Notification",
    plural: "Notifications",
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

export default Notifications;