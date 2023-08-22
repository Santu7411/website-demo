import { CollectionConfig } from 'payload/types';
import FeedsImages from '../blocks/Feedsimages';
import H5Pages from '../blocks/H5Pages';

const Assets: CollectionConfig = {
  slug: 'assets',
  labels: {
    singular: "Asset",
    plural: "Assets",
  },  
  admin: {
    useAsTitle: 'title',
    group: 'Promotion',
  },
  fields: [
    {
      name: "title",
      label: "物料名称", 
      type: "text",
      required: true,
      admin:{ 
        width:"50%",          
      }
    },
    {
      name: 'content', // required
      type: 'blocks', // required
      label: '内容',
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        FeedsImages,
        H5Pages,
      ],
    },
  ],
}

export default Assets;