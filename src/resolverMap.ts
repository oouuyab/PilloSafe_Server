import { IResolvers, IResolverObject } from 'graphql-tools';
import getMediInfo from './util/mediInfo';
import 'dotenv/config';

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `Hello GraphQL~!`;
    },
    getMediInfo(_: void, args: void): any {
      return getMediInfo('병용금기', '', 'Itraconazole ', '', '');
    }
  }
};

export default resolverMap;
