import { payloadCloud } from '@payloadcms/plugin-cloud'
import FormBuilder from '@payloadcms/plugin-form-builder'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import redirects from '@payloadcms/plugin-redirects'
import seo from '@payloadcms/plugin-seo'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import path from 'path'
import { buildConfig } from 'payload/config'

import Categories from './collections/Categories'
import { Media } from './collections/Media'
import Products from './collections/Products';
import Skus from './collections/Skus';
import Gifts from './collections/Gifts';
import Targets from './collections/Targets';
import Campaigns from './collections/Campaigns';
import Assets from './collections/Assets';
import TouchPoints from './collections/TouchPoints';
import Engagements from './collections/Engagements';
import GWPs from './collections/GWPs';
import Achievements from './collections/Achievements';
import Wallets from './collections/Wallets';
import Feeds from './collections/Feeds';
import Slides from './collections/Slides';
import Pages from './collections/Pages';
import Forms from './collections/Forms';
import Notifications from './collections/Notifications';
import Hints from './collections/Hints';
import Resources from './collections/Resources';
import References from './collections/References';
import Coupons from './collections/Coupons';
import Badges from './collections/Badges';
import Tags from './collections/Tags';
import CalculatedEvents from './collections/CalculatedEvents';
import InteractiveEvents from './collections/InteractiveEvents copy';
import CartPromotions from './collections/CartPromotions';
import RealtimeInteractives from './collections/RealtimeInteractives';
import CustomEvents from './collections/CustomEvents';
import CouponRules from './collections/CouponRules';
import PointsRules from './collections/PointsRules';

import Users from './collections/Users'
import BeforeDashboard from './components/BeforeDashboard'


const generateTitle: GenerateTitle = () => {
  return 'My Website'
}

const mockModulePath = path.resolve(__dirname, './emptyModuleMock.js')

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      // The BeforeDashboard component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import BeforeDashboard statement on line 15.
      beforeDashboard: [BeforeDashboard],
    },
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          express: mockModulePath,
        },
      },
    }),
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Categories, Campaigns, Feeds, TouchPoints, Products, Skus, Engagements, CartPromotions, RealtimeInteractives, CustomEvents, CouponRules, PointsRules, Assets, Targets, CalculatedEvents, InteractiveEvents, Wallets, Achievements, GWPs, Slides, Pages,Forms, Notifications, Hints, Resources,References, Tags, Users, Media, Gifts, Coupons, Badges],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  ...(process.env.PAYLOAD_PUBLIC_SITE_URL
    ? {
        cors: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
        csrf: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
      }
    : {}),
  plugins: [
    FormBuilder({
      fields: {
        payment: true,
      },
    }),
    nestedDocs({
      collections: ['pages', 'posts', 'categories'],
    }),
    redirects({
      collections: ['pages', 'posts'],
    }),
    seo({
      collections: ['pages', 'posts'],
      generateTitle,
      uploadsCollection: 'media',
    }),
    payloadCloud(),
  ],
})
