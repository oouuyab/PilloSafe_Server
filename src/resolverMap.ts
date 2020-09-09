import { IResolvers, IResolverObject } from 'graphql-tools';
import getMediInfo from './util/mediInfo';
import 'dotenv/config';

const resolverMap: IResolvers = {
  Query: {
    hi(_: void, args: void): string {
      return `Hello GraphQL~!`;
    },
    getMediInfo: () => getMediInfo('병용금기', '', '', '1', '3')
  }
};

export default resolverMap;
