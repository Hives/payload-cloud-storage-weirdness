import { CollectionConfig } from 'payload/types';
import {isAdmin, isAdminFieldLevel} from "../access/isAdmin";
import {isAdminOrSelf, isAdminOrSelfFieldLevel} from "../access/isAdminOrSelf";

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['public'],
      required: true,
      access: {
        read: isAdminOrSelfFieldLevel,
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: [
        'admin',
        'public'
      ]
    }
  ],
};

export default Users;
