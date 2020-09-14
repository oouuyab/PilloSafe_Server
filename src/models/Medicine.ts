import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MedicineSchema = new Schema({
  id: {
    type: String,
    required: false
  },
  ENTP_NAME: {
    type: String,
    required: false
  },
  MIXTURE_INGR_ENG_NAME: {
    type: String,
    required: false
  },
  DUR_SEQ: {
    type: Number,
    required: false
  },
  CODE: {
    type: Number,
    required: false
  },
  ITEM_PERMIT_DATE: {
    type: String,
    required: false
  },
  MIXTURE_INGR_CODE: {
    type: String,
    required: false
  },
  MIXTURE_ITEM_NAME: {
    type: String,
    required: false
  },
  REMARK: {
    type: String,
    required: false
  },
  MIXTURE_ETC_OTC_NAME: {
    type: String,
    required: false
  },
  TYPE_NAME: {
    type: String,
    required: false
  },
  FORM_NAME: {
    type: String,
    required: false
  },
  MIXTURE_FORM_CODE: {
    type: Number,
    required: false
  },
  FORM_CODE: {
    type: Number,
    required: false
  },
  RESISTERED_ID: {
    type: String,
    required: false
  },
  MIXTURE_ENTP_NAME: {
    type: String,
    required: false
  },
  MIXTURE_INGR_KOR_NAME: {
    type: String,
    required: false
  },
  NOTIFICATION_DATE: {
    type: String,
    required: false
  },
  MIXTURE_ITEM_PERMIT_DATE: {
    type: String,
    required: false
  },
  INGR_ENG_NAME: {
    type: String,
    required: false
  },
  MIXTURE_CLASS_NAME: {
    type: String,
    required: false
  },
  PROHBT_CONTENT: {
    type: String,
    required: false
  },
  CHANGE_DATE: {
    type: String,
    required: false
  },
  RESISTERED_DATE: {
    type: String,
    required: false
  },
  MIXTURE_MIX: {
    type: String,
    required: false
  },
  MAIN_INGR: {
    type: String,
    required: false
  },
  TYPE_CODE: {
    type: String,
    required: false
  },
  MIX: {
    type: String,
    required: false
  },
  INGR_KOR_NAME: {
    type: String,
    required: false
  },
  CHART: {
    type: String,
    required: false
  },
  MIXTURE_CLASS_CODE: {
    type: Number,
    required: false
  },
  MIXTURE_FORM_NAME: {
    type: String,
    required: false
  },
  MIXTURE_MAIN_INGT: {
    type: String,
    required: false
  },
  ITEM_SEQ: {
    type: Number,
    required: false
  },
  CLASS_NAME: {
    type: String,
    required: false
  },
  ETC_OTC_CODE: {
    type: Number,
    required: false
  },
  ITEM_NAME: {
    type: String,
    required: false
  },
  MIXTURE_DUR_SEQ: {
    type: Number,
    required: false
  },
  MIX_INGT: {
    type: String,
    required: false
  },
  CHANGE_ID: {
    type: String,
    required: false
  },
  INGR_CODE: {
    type: String,
    required: false
  },
  ETC_OTC_NAME: {
    type: String,
    required: false
  },
  MIXTURE_ITEM_SEQ: {
    type: Number,
    required: false
  },
  MIXTURE_ETC_OTC_CODE: {
    type: Number,
    required: false
  },
  CLASS_CODE: {
    type: Number,
    required: false
  },
  MIXTURE_CHART: {
    type: String,
    required: false
  }
});

export default mongoose.model('medicine', MedicineSchema);
