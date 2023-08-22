import { Block } from 'payload/types';

const Achievement: Block = {
  slug: 'achievement', // required
  labels: {
    singular: "Achievement",
    plural: "Achievements",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686821100/icon_file_sx2p3c.png',
  interfaceName: 'achievement', // optional
  fields: [
    // required
    {
      name:"achievement",
      label: "成就规则",
      type:"relationship",
      relationTo:["achievements"],
      hasMany: false,
    },
  ],
};


export default Achievement;