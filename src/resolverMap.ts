import { IResolvers, IResolverObject } from 'graphql-tools';
import getContraindicate from './models/getContraindicate';

const resolverMap: IResolvers = {
  Query: {
    async hi() {
      return 'Hello GraphQL~!';
    },
    async contraindicate(root, { ITEM_NAME, MIXTURE_ITEM_NAME }) {
      return getContraindicate(ITEM_NAME, MIXTURE_ITEM_NAME);
    }
  }
};

export default resolverMap;
