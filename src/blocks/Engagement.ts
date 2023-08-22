import { Block } from 'payload/types';

const Engagement: Block = {
  slug: 'engagement', // required
  labels: {
    singular: "Engagement",
    plural: "Engagements",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686821100/icon_file_sx2p3c.png',
  interfaceName: 'engagement', // optional
  fields: [
    // required
    {
      name:"engagement",
      label: "互动规则",
      type:"relationship",
      relationTo:["engagements"],
      hasMany: false,
    },
  ],
};


export default Engagement;