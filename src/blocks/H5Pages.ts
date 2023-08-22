import { Block } from 'payload/types';

const H5Pages: Block = {
  slug: 'H5', // required
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'H5Pages', // optional
  fields: [
    // required
    {
      name: 'quoteHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'quoteText',
      type: 'text',
    },
  ],
};


export default H5Pages;