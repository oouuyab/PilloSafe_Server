import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MedicineSchema = new Schema({
  id: {
    type: String,
    require: true
  },
  ENTP_NAME: {
    type: String,
    require: true
  },
  MIXTURE_INGR_ENG_NAME: {
    type: String,
    require: true
  },
  DUR_SEQ: {
    type: Number,
    require: true
  },
  CODE: {
    type: Number,
    require: true
  },
  ITEM_PERMIT_DATE: {
    type: String,
    require: true
  },
  MIXTURE_INGR_CODE: {
    type: String,
    require: true
  },
  MIXTURE_ITEM_NAME: {
    type: String,
    require: true
  },
  REMARK: {
    type: String,
    require: false
  },
  MIXTURE_ETC_OTC_NAME: {
    type: String,
    require: true
  },
  TYPE_NAME: {
    type: String,
    require: true
  },
  FORM_NAME: {
    type: String,
    require: true
  },
  MIXTURE_FORM_CODE: {
    type: Number,
    require: true
  },
  FORM_CODE: {
    type: Number,
    require: true
  },
  RESISTERED_ID: {
    type: String,
    require: true
  },
  MIXTURE_ENTP_NAME: {
    type: String,
    require: true
  },
  MIXTURE_INGR_KOR_NAME: {
    type: String,
    require: true
  },
  NOTIFICATION_DATE: {
    type: String,
    require: true
  },
  MIXTURE_ITEM_PERMIT_DATE: {
    type: String,
    require: true
  },
  INGR_ENG_NAME: {
    type: String,
    require: true
  },
  MIXTURE_CLASS_NAME: {
    type: String,
    require: true
  },
  PROHBT_CONTENT: {
    type: String,
    require: true
  },
  CHANGE_DATE: {
    type: String,
    require: true
  },
  RESISTERED_DATE: {
    type: String,
    require: true
  },
  MIXTURE_MIX: {
    type: String,
    require: true
  },
  MAIN_INGR: {
    type: String,
    require: true
  },
  TYPE_CODE: {
    type: String,
    require: true
  },
  MIX: {
    type: String,
    require: true
  },
  INGR_KOR_NAME: {
    type: String,
    require: true
  },
  CHART: {
    type: String,
    require: true
  },
  MIXTURE_CLASS_CODE: {
    type: Number,
    require: true
  },
  MIXTURE_FORM_NAME: {
    type: String,
    require: true
  },
  MIXTURE_MAIN_INGT: {
    type: String,
    require: true
  },
  ITEM_SEQ: {
    type: Number,
    require: true
  },
  CLASS_NAME: {
    type: String,
    require: true
  },
  ETC_OTC_CODE: {
    type: Number,
    require: true
  },
  ITEM_NAME: {
    type: String,
    require: true
  },
  MIXTURE_DUR_SEQ: {
    type: Number,
    require: true
  },
  MIX_INGT: {
    type: String,
    require: false
  },
  CHANGE_ID: {
    type: String,
    require: true
  },
  INGR_CODE: {
    type: String,
    require: true
  },
  ETC_OTC_NAME: {
    type: String,
    require: true
  },
  MIXTURE_ITEM_SEQ: {
    type: Number,
    require: true
  },
  MIXTURE_ETC_OTC_CODE: {
    type: Number,
    require: true
  },
  CLASS_CODE: {
    type: Number,
    require: true
  },
  MIXTURE_CHART: {
    type: String,
    require: true
  }
});

export default mongoose.model('medicine', MedicineSchema);
