import { CollectionConfig } from 'payload/types';
import EventInteractive from '../blocks/triggers/EventInteractive';
import GiveBadges from '../blocks/rewards/GiveBadges';
import GiveCoupons from '../blocks/rewards/GiveCoupons';
import AddPoints from '../blocks/rewards/AddPoints';
import GiveGifts from '../blocks/rewards/GiveGifts';
import PushSMS from '../blocks/rewards/PushSMS';
import PushMpHints from '../blocks/rewards/PushMpHints';
import EbaCare from '../blocks/rewards/EbaCare';

const RealtimeInteractives: CollectionConfig = {
  slug: 'realtimeInteractives',
  labels: {
    singular: "Realtime Interactive",
    plural: "Realtime Interactive",
  },    
  admin: {
    useAsTitle: 'title',
    group: 'Rules',
  },
  fields: [
    {
      name: "title",
      label: "互动名称", 
      type: "text",
    },
      {
        type: "tabs", // required
        tabs: [
          // required
          {
            name: "settings",
            label: "设置", // required
            fields: [
              // required
              {
                name: "targets", // required
                type: "group", // required
                label: "目标人群",
                fields: [
                  {
                    type:'row',
                    fields:[
                      {
                        name: 'operate', // required
                        label: "条件",
                        type: 'select', // required
                        hasMany: false,
                        options: [
                          {
                            label: '无规定',
                            value: 'none',
                          },
                          {
                            label: '符合这些标签之一',
                            value: 'isOneOf',
                          },
                          {
                            label: '除这些标签之外',
                            value: 'isNotOneOf',
                          },       
                        ],
                        admin:{
                          width:"30%",
                        }
                      },
              {
                name:"tags",
                label: "人群标签",
                type:"relationship",
                relationTo:["targets"],
          hasMany: true,
                        admin:{
                          width:"70%",
                        }
              }, 
            ]
          },
            ]
              },
              {
                name: "touchpoints", // required
                type: "group", // required
                label: "触点",
                fields: [
                  {
                    type:'row',
                    fields:[
                      {
                        name: 'operate', // required
                        label: "条件",
                        type: 'select', // required
                        hasMany: false,
                        options: [
                          {
                            label: '无规定',
                            value: 'none',
                          },
                          {
                            label: '符合这些标签之一',
                            value: 'isOneOf',
                          },
                          {
                            label: '除这些标签之外',
                            value: 'isNotOneOf',
                          },       
                        ],
                        admin:{
                          width:"30%",
                        }
                      },
              {
                name:"tags",
                label: "触点标签",
                type:"relationship",
                relationTo:["touchPoints"],
          hasMany: true,
                        admin:{
                          width:"70%",
                        }
              }, 
            ]
          },
            ]
              },
              {
                name: "types", // required
                type: "group", // required
                label: "互动类型",
                fields: [
              {
                type:'row',
                fields:[
                  {
                    name: 'isReferral', // required
                    type: 'checkbox', // required
                    label: '是否裂变活动',
                    defaultValue: false,
                    admin:{ 
                      width:"20%",          
                    },
                  },
                  {
                    name: 'isAchievement', // required
                    type: 'checkbox', // required
                    label: '是否连续打卡',
                    defaultValue: false,
                admin:{ 
                  width:"20%",          
                },
                  },
              {
                name: 'occurrence', // required
                type: 'select', // required
                label: '打卡频率',
                options: [
                  {
                    label: '次数',
                    value: 'overall',
                  },
                  {
                    label: '连续几天',
                    value: 'consecutiveDay',
                  },
                  {
                    label: '连续几周',
                    value: 'consecutiveWeek',
                  },
                  {
                    label: '连续几月',
                    value: 'consecutiveMonth',
                  },
                  {
                    label: '连续几年',
                    value: 'consecutiveYear',
                  },
                ],
                admin:{ 
                  width:"40%",   
                     condition: (data, siblingData, { user }) => {
                       if (siblingData.isAchievement) {
                         return true;
                       } else {
                         return false;
                       }
                     }       
                },
              },
              {
                name: 'goal', // required
                label: '打卡目标',
                type: 'number', // required
                admin: {
                  step: 1,
                  width:"20%",   
                  condition: (data, siblingData, { user }) => {
                    if (siblingData.isAchievement) {
                      return true;
                    } else {
                      return false;
                    }
                  }      
                }
              },
            ]
          },
        ]
      },
              {
                name: "time", // required
                type: "group", // required
                label: "互动时间",
                fields: [
                  {
                    type:'row',
                    fields:[
                  {
                    name: 'operate', // required
                    label: "条件",
                    type: 'select', // required
                    hasMany: false,
                    options: [
                      {
                        label: '无规定',
                        value: 'none',
                      },
                      {
                        label: '晚于',
                        value: 'isAfter',
                      },
                      {
                        label: '早于',
                        value: 'isBefore',
                      },
                      {
                        label: '在...之间',
                        value: 'isBetween',
                      },
                      {
                        label: '不在...之间',
                        value: 'isNotBetween',
                      },
                      {
                        label: '在周几',
                        value: 'isDayOfWeek',
                      },
                      {
                        label: '在一个月的第几天',
                        value: 'isDayOfMonth',
                      },
                      {
                        label: '在每年的某个月',
                        value: 'isMonthOfYear',
                      },   
                      {
                        label: '在每天的某个时间段',
                        value: 'isTimeBetween',
                      },       
                    ],
                    admin:{
                      width:"40%",
                    }
                  },
                  {
                    name:"start",
                    label: "开始时间",
                    type:"date",
                    admin:{
                      width:"30%",
                      date:{
                        pickerAppearance: "dayAndTime",
                      },   
                      condition: (data, siblingData, { user }) => {
                        var arr=['isAfter','isBetween','isNotBetween'];
                        if (arr.indexOf(siblingData.operate)>=0) {
                          return true;
                        } else {
                          return false;
                        }
                      } 
                    }
                  }, 
                  {
                    name:"end",
                    label: "结束时间",
                    type:"date",
                    admin:{
                      width:"30%",
                      date:{
                        pickerAppearance: "dayAndTime",
                      },   
                      condition: (data, siblingData, { user }) => {
                        var arr=['isBefore','isBetween','isNotBetween'];
                        if (arr.indexOf(siblingData.operate)>=0) {
                          return true;
                        } else {
                          return false;
                        }
                      } 
                    }
                  },
                  {
                    name: 'weekDay', // required
                    label: "周几",
                    type: 'select', // required
                    hasMany: true,
                    options: [
                      {
                        label: '周一',
                        value: 'Monday',
                      },
                      {
                        label: '周二',
                        value: 'Tuesday',
                      },
                      {
                        label: '周三',
                        value: 'Wednesday',
                      },
                      {
                        label: '周四',
                        value: 'Thusly',
                      },
                      {
                        label: '周五',
                        value: 'Friday',
                      },
                      {
                        label: '周六',
                        value: 'Satuarday',
                      },
                      {
                        label: '周日',
                        value: 'Sunday',
                      },       
                    ],
                    admin:{
                      width:"30%",   
                      condition: (data, siblingData, { user }) => {
                        if (siblingData.operate=='isDayOfWeek') {
                          return true;
                        } else {
                          return false;
                        }
                      }
                    }
                  },
                  {
                    name: 'month', // required
                    label: "月份",
                    type: 'select', // required
                    hasMany: true,
                    options: [
                      {
                        label: '一月',
                        value: 'Jan',
                      },
                      {
                        label: '二月',
                        value: 'Feb',
                      },
                      {
                        label: '三月',
                        value: 'Mar',
                      },
                      {
                        label: '四月',
                        value: 'Apr',
                      },
                      {
                        label: '五月',
                        value: 'May',
                      },
                      {
                        label: '六月',
                        value: 'Jun',
                      },
                      {
                        label: '七月',
                        value: 'Jul',
                      },  
                      {
                        label: '八月',
                        value: 'Aug',
                      },  
                      {
                        label: '九月',
                        value: 'Sep',
                      },  
                      {
                        label: '十月',
                        value: 'Oct',
                      },  
                      {
                        label: '十一月',
                        value: 'Nov',
                      },  
                      {
                        label: '十二月',
                        value: 'Dec',
                      },       
                    ],
                    admin:{
                      width:"30%",   
                      condition: (data, siblingData, { user }) => {
                        if (siblingData.operate=='isMonthOfYear') {
                          return true;
                        } else {
                          return false;
                        }
                      }
                    }
                  }, 
                  {
                    name: 'day', // required
                    type: 'number', // required
                    min: 1,
                    max: 31,
                    hasMany: true,
                    admin: {
                      width:"30%", 
                      step: 1,
                      condition: (data, siblingData, { user }) => {
                        if (siblingData.operate=='isDayOfMonth') {
                          return true;
                        } else {
                          return false;
                        }
                      }
                    }
                  },
                  {
                    name:"startTime",
                    label: "开始时间",
                    type:"date",
                    admin:{
                      width:"30%",
                      date:{
                        pickerAppearance: "timeOnly",
                        displayFormat: "h:mm:ss a",
                      },   
                      condition: (data, siblingData, { user }) => {
                        if (siblingData.operate=='isTimeBetween') {
                          return true;
                        } else {
                          return false;
                        }
                      } 
                    }
                  }, 
                  {
                    name:"endTime",
                    label: "结束时间",
                    type:"date",
                    admin:{
                      width:"30%",
                      date:{
                        pickerAppearance: "timeOnly",
                        displayFormat: "h:mm:ss a",
                      },   
                      condition: (data, siblingData, { user }) => {
                        if (siblingData.operate=='isTimeBetween') {
                          return true;
                        } else {
                          return false;
                        }
                      } 
                    }
                  },
                ],
              },
                ]
              }
            ],
          },      
          {
            name: "rules",
            label: "规则", // required
            fields: [
              // required
              
              {
                name: 'triggers', // required
                type: 'blocks', // required
                label: '触发条件',
                blocks: [
                  EventInteractive
                ],
              },
              {
                name: 'effects', // required
                type: 'blocks', // required
                label: '结果',
                blocks: [
                  GiveBadges, GiveCoupons, AddPoints, GiveGifts, PushSMS, PushMpHints, EbaCare
                ],
              },
              {
                name: "limits", // required
                type: "group", // required
                label: "限制",
                fields: [
                  {
                    type:'row',
                    fields:[
                      {
                        name: 'unitsLimit', // required
                        label: "奖励总数限制",
                        type: 'select', // required
                        hasMany: false,
                        options: [
                          {
                            label: '无规定',
                            value: 'unlimited',
                          },
                          {
                            label: '每天',
                            value: 'perDay',
                          },
                          {
                            label: '每小时',
                            value: 'perHour',
                          },
                          {
                            label: '每周',
                            value: 'perWeek',
                          },
                          {
                            label: '每月',
                            value: 'perMonth',
                          },
                          {
                            label: '每年',
                            value: 'perYear',
                          },
                          {
                            label: '总计',
                            value: 'inTotal',
                          },       
                        ],
                        admin:{
                          width:"50%",
                        }
                      },
                      {
                        name: 'units', // required
                        type: 'number', // required
                        admin: {
                          step: 1,
                          width:"50%",
                        }
                      }
            ]
          },
          {
            type:'row',
            fields:[
              {
                name: 'unitsLimitPerMember', // required
                label: "每人奖励数量限制",
                type: 'select', // required
                hasMany: false,
                options: [
                  {
                    label: '无规定',
                    value: 'unlimited',
                  },
                  {
                    label: '每天',
                    value: 'perDay',
                  },
                  {
                    label: '每小时',
                    value: 'perHour',
                  },
                  {
                    label: '每周',
                    value: 'perWeek',
                  },
                  {
                    label: '每月',
                    value: 'perMonth',
                  },
                  {
                    label: '每年',
                    value: 'perYear',
                  },
                  {
                    label: '总计',
                    value: 'inTotal',
                  },       
                ],
                admin:{
                  width:"50%",
                }
              },
              {
                name: 'unitsPerMember', // required
                type: 'number', // required
                admin: {
                  step: 1,
                  width:"50%",
                }
              }
    ]
  },
  {
    type:'row',
    fields:[
      {
        name: 'engagementLimitPerMember', // required
        label: "每人参与限制",
        type: 'select', // required
        hasMany: false,
        options: [
          {
            label: '无规定',
            value: 'unlimited',
          },
          {
            label: '每天',
            value: 'perDay',
          },
          {
            label: '每小时',
            value: 'perHour',
          },
          {
            label: '每周',
            value: 'perWeek',
          },
          {
            label: '每月',
            value: 'perMonth',
          },
          {
            label: '每年',
            value: 'perYear',
          },
          {
            label: '总计',
            value: 'inTotal',
          },       
        ],
        admin:{
          width:"50%",
        }
      },
      {
        name: 'engagementPerMember', // required
        type: 'number', // required
        admin: {
          step: 1,
          width:"50%",
        }
      }
  ]
  },
            ]
              },
            ],
          },
        ],
      },
    ],
}

export default RealtimeInteractives;