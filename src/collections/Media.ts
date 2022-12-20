import { CollectionConfig } from 'payload/types';
import path from 'path';
import { isAdmin } from '../access/isAdmin';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../media'),
  },
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ]
}
