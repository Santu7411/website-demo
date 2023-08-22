import { CollectionConfig } from 'payload/types';
import ResourceText from '../blocks/ResourceText';
import ResourceImage from '../blocks/ResourceImage';
import ResourceVideo from '../blocks/ResourceVideo';
import ResourceFile from '../blocks/ResourceFile';

const Resources: CollectionConfig = {
  slug: 'resources',
  labels: {
    singular: "Resource",
    plural: "Resources",
  },
  admin: {
    useAsTitle: 'title',
    listSearchableFields: ['title'],
    group: 'Resources',
  },
  fields: [
    {
      type:'row',
      fields:[
        {
          name: "title",
          label: "素材名称", 
          type: "text",
          required: true,
          admin:{ 
            width:"50%",          
          }
        },
        {
          name:"products",
          label: "相关产品",
          type:"relationship",
          relationTo:["products"],
          admin:{
            width:"50%",
                  style: {
                    alignSelf: 'flex-end',
                  },
          }
        }, 
      ]
    },
    {
      name: 'content', // required
      type: 'blocks', // required
      label: '内容',
      blocks: [
        ResourceText,
        ResourceImage,
        ResourceVideo,
        ResourceFile,
      ],
    },
  ],
}

export default Resources;