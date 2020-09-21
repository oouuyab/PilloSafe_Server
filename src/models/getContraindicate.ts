import axios from 'axios';
import dotenv from 'dotenv';
import parseXML from '../util/parseXML';

dotenv.config();

const getContraindicate = async (itemName: string, mixtureItemName: string) => {
  try {
    console.time('getContarindicate');
    const url = process.env.MEDICINE_URL;
    const key = process.env.MEDICINE_KEY;

    const sub = '/getUsjntTabooInfoList';
    let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key;
    queryParams += '&' + encodeURIComponent('typeName') + '=' + encodeURIComponent('');
    queryParams += '&' + encodeURIComponent('ingrCode') + '=' + encodeURIComponent('');
    queryParams += '&' + encodeURIComponent('itemName') + '=' + encodeURIComponent(itemName);
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100');
    queryParams += '&' + encodeURIComponent('start_change_date') + '=' + encodeURIComponent('');
    queryParams += '&' + encodeURIComponent('end_change_date') + '=' + encodeURIComponent('') + '&';
    let result = await axios({
      url: url + sub + queryParams,
      method: 'GET'
    });

    let items = parseXML(result.data).response.body.items.item;
    let targetItem;
    items.forEach((item: { MIXTURE_ITEM_NAME: string }) => {
      if (item.MIXTURE_ITEM_NAME === mixtureItemName) {
        targetItem = { ...item };
      }
    });
    console.log(targetItem);
    console.timeEnd('getContarindicate');
    return targetItem;
  } catch (err) {
    console.log('getContraindicate err');
    console.log(err);
    console.timeEnd('getContarindicate');
    return {};
  }
};

export default getContraindicate;
