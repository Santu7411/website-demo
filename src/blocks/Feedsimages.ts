import { Block } from 'payload/types';

const FeedsImages: Block = {
  slug: 'FeedsImage', // required
  imageURL: 'https://cdn3.iconfinder.com/data/icons/feather-5/24/box-256.png',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'QuoteBlock', // optional
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

export default FeedsImages;