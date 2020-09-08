import { IResolvers, IResolverObject } from 'graphql-tools';
import getMediInfo from './util/mediInfo';
import 'dotenv/config';

const resolverMap: IResolvers = {
  Query: {
    hi(_: void, args: void): string {
      return `Hello GraphQL~!`;
    },
    getMediInfo(_: void, args: void): any {
      getMediInfo('병용금기', '', 'Itraconazole ', '', '');
    }
  }
};

export default resolverMap;
