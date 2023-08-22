import { CollectionConfig } from 'payload/types';
import Engagement from '../blocks/Engagement';
import Achievement from '../blocks/Achievement';

const Campaigns: CollectionConfig = {
  slug: 'campaigns',
  labels: {
    singular: "Campaign",
    plural: "Campaigns",
  },    
  admin: {
    useAsTitle: 'title',
    listSearchableFields: ['titleCN'],
    group: 'Promotion',
  },
  fields: [
    {
      name: "title",
      label: "名称", 
      type: "text",
      required: true,
    },
    {
      type: "tabs", // required
      tabs: [
        // required
        {
          name: "info",
          label: "基本信息", // required
          description: "This will appear within the tab above the fields.",
          fields: [
            // required
            {
              type:'row',
              fields:[
         
               {
                 name:"start",
                 label: "开始时间",
                 type:"date",
                 admin:{
                   width:"40%",
                         style: {
                           alignSelf: 'flex-end',
                         },
                   date:{
                     pickerAppearance: "dayAndTime",
                   }      
                 }
               },
               {
                 name: 'hasEnd', // required
                 type: 'checkbox', // required
                 label: '结束时间',
                 defaultValue: true,
                 admin:{
                   width:"20%",
                         style: {
                           verticalAlign: 'bottom',
                         },    
                 }
               },  
               {
                 name:"end",
                 label: "结束时间",
                 type:"date",
                 admin:{
                   width:"40%",
                         style: {
                           alignSelf: 'flex-end',
                         },
                   date:{
                     pickerAppearance: "dayAndTime",
                   },
                   condition: (data, siblingData, { user }) => {
                     if (siblingData.hasEnd) {
                       return true;
                     } else {
                       return false;
                     }
                   }
                 }
               }, 
              ] 
             },
            {
              name:"target",
              type:"relationship",
              relationTo:["targets"],
              hasMany: true,
            },
            {
              name: "description",
              type: "richText",
            }
          ],
        },
        {
          name: "policy",
          label: "互动", // required
          fields: [
            // required
            {
              name: 'interactive', // required
              type: 'blocks', // required
              label: '互动',
              blocks: [
                Engagement, Achievement
              ],
            },
          ],
        },
        {
          name: "assetsPlan",
          label: "物料计划", // required
          fields: [
            // required
            {
              name: "assets", // required
              type: "array", // required
              label: "物料计划",
              minRows: 1,
              labels: {
                singular: "物料",
                plural: "物料",
              },
              fields: [
                // required
                {
                  type:'row',
                  fields:[
                    {
                      name:"touchPoint",
                      label: "触点",
                      type:"relationship",
                      relationTo:["touchPoints"],
                      hasMany: false,
                      admin:{
                        width:"25%",   
                      }
                    }, 
                    {
                      name:"material",
                      label: "物料",
                      type:"relationship",
                      relationTo:["assets"],
                      hasMany: false,
                      admin:{
                        width:"25%",
                              style: {
                                alignSelf: 'flex-end',
                              },   
                      }
                    }, 
                    {
                      name:"start",
                      label: "开始时间",
                      type:"date",
                      admin:{
                        width:"25%",
                              style: {
                                alignSelf: 'flex-end',
                              },
                        date:{
                          pickerAppearance: "dayAndTime",
                        }      
                      }
                    }, 
                    {
                      name:"end",
                      label: "结束时间",
                      type:"date",
                      admin:{
                        width:"25%",
                              style: {
                                alignSelf: 'flex-end',
                              },
                        date:{
                          pickerAppearance: "dayAndTime",
                        }      
                      }
                    }, 
                  ]
                },
                
              ],
            },
          ],
        }      
      ],
    },
  ],
  
}

export default Campaigns;