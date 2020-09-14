import { IResolvers, IResolverObject } from 'graphql-tools';
import medicine from './models/Medicine';

const resolverMap: IResolvers = {
  Query: {
    async getMediInfo(root, { ENTP_NAME }) {
      return await medicine.find({ ENTP_NAME: ENTP_NAME });
    }
  }
};

export default resolverMap;
