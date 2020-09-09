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
    let type = '/';
    if (typeName === '병용금기') {
      type += 'getUsjntTabooInfoList';
    }
    // queryParams += '&' + encodeURIComponent('typeName') + '=' + encodeURIComponent(typeName);
    if (ingrCode !== '')
      queryParams += '&' + encodeURIComponent('ingrCode') + '=' + encodeURIComponent(ingrCode);
    if (ingrKorName !== '')
      queryParams +=
        '&' + encodeURIComponent('ingrKorName') + '=' + encodeURIComponent(ingrKorName);
    if (pageNo !== '')
      queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo);
    if (numOfRows !== '')
      queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent(numOfRows);

    // if (typeName === '병용금기') {
    //   type += 'getUsjntTabooInfoList';
    //   queryParams += '&' + encodeURIComponent('typeName') + '=' + encodeURIComponent(typeName);
    // } else if (ingrCode !== '') {
    //   queryParams += '&' + encodeURIComponent('ingrCode') + '=' + encodeURIComponent(ingrCode);
    // } else if (ingrKorName !== '') {
    //   queryParams +=
    //     '&' + encodeURIComponent('ingrKorName') + '=' + encodeURIComponent(ingrKorName);
    // } else if (pageNo !== '') {
    //   queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo);
    // } else if (numOfRows !== '') {
    //   queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent(numOfRows);
    // }
    console.log(url + type + queryParams);
    let getInfo = await axios({ url: url + type + queryParams, method: 'GET' });
    let parsedData = parseXML(getInfo.data).response.body.items;
    console.log(parsedData);
    return parsedData;
  } catch (err) {
    console.log('getMediInfo err');
    console.log(err);
    return;
  }
};

export default getMediInfo;
