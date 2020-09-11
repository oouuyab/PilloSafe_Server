import { IResolvers, IResolverObject } from 'graphql-tools';
import 'dotenv/config';
import medicine from './models/Medicine';

const resolverMap: IResolvers = {
  Query: {
    // hi(_: void, args: void): string {
    //   return `Hello GraphQL~!`;
    // },
    // getMediInfo: () => getMediInfo('병용금기', '', '', '1', '3'),
    async getMediInfo() {
      return await medicine.find();
    }
  }
};

export default resolverMap;
