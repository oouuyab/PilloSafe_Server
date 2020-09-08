let axios = require('axios');
import 'dotenv/config';
import parseXML from './parseXML';

const url = process.env.MEDICINE_URL;
const key = process.env.MEDICINE_KEY;

let getMediInfo = async (
  typeName: string,
  ingrCode: string,
  ingrKorName: string,
  pageNo: string,
  numOfRows: string
) => {
  try {
    let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + key;

    if (typeName !== '') {
      queryParams += '&' + encodeURIComponent('typeName') + '=' + encodeURIComponent(typeName);
    } else if (ingrCode !== '') {
      queryParams += '&' + encodeURIComponent('ingrCode') + '=' + encodeURIComponent(ingrCode);
    } else if (ingrKorName !== '') {
      queryParams +=
        '&' + encodeURIComponent('ingrKorName') + '=' + encodeURIComponent(ingrKorName);
    } else if (pageNo !== '') {
      queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo);
    } else if (numOfRows !== '') {
      queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent(numOfRows);
    } else {
      return '';
    }

    let getInfo = await axios({ url: url + queryParams, method: 'GET' });
    let parsedData = parseXML(getInfo.data).response.body.items;
    return parsedData;
  } catch (err) {
    console.log('getMediInfo err');
    console.log(err);
    return;
  }
};

export default getMediInfo;
