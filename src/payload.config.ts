import {buildConfig} from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import {Media} from "./collections/Media";
import {cloudStorage} from "@payloadcms/plugin-cloud-storage";
import {gcsAdapter} from "@payloadcms/plugin-cloud-storage/gcs";

const mockModulePath = path.resolve(__dirname, 'mocks/empty.js');

export default buildConfig({
  serverURL: `http://localhost:${process.env.PORT}`,
  admin: {
    user: Users.slug,
    // webpack: (config) => ({
    //   ...config,
    //   resolve: {
    //     ...config.resolve,
    //     alias: {
    //       ...config.resolve.alias,
    //       "assert": mockModulePath,
    //       "child_process": mockModulePath,
    //       "fs": mockModulePath,
    //       "net": mockModulePath,
    //       "os": mockModulePath,
    //       "querystring": mockModulePath,
    //       "request": mockModulePath,
    //       "stream": mockModulePath,
    //       "tls": mockModulePath,
    //       "url": mockModulePath,
    //       "util": mockModulePath,
    //       "zlib": mockModulePath,
    //     }
    //   }
    // })
  },
  collections: [
    Media,
    Users,
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    cloudStorage({
      collections: {
        'media': {
          adapter: gcsAdapter({
            options: {},
            bucket: process.env.GCS_BUCKET,
          })
        },
      },
    }),
  ]
});
