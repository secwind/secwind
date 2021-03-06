import {
  GET_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT,
  UPDATE_CONTACT,
  DEL_CONTACT
} from "../action/type";


// initialState คือ Store ทั้งหมดของ Redux Reducer 
const initialState = {

  // StoreData เป็น storeใหญ่ 
  // storeA เป็นลูกของ StoreData(ใหญ่) มาเป็นกราฟลงมาเรื่อย ถ้าลงเรียก storeB ถ้าไปทางขวาเรียก storeA1
  // storeA ในที่นี้เป็น Data ที่ชื่อว่า contact

  storeA: [

  ],
  storeB: [

  ],
  storeEditting: {

  },
}

// เปลี่ยน initialState  เป็น state คือ Store ทั้งหมดของ Redux Reducer ไป config กับ reducers/index
// actin เป็นข้อมูลหรือ Object ที่ถึงส่งมาจาก Component อื่น
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        storeA: action.payload
      };

    case ADD_CONTACT:
      return {
        ...state,
        storeA: [action.payload, ...state.storeA],
      };

    case EDIT_CONTACT:
      return {
        ...state,
        storeEditting: action.payload,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        storeA: state.storeA.map(setData => // สร้างตัวแปล setData ของข้อมูล storeA 
          setData.id === action.payload.id // ถ้า setData.id เท่ากับ id ที่ถูกส่งมาจาก payload.id
          ?
          (setData = action.payload) // ก็ให้เปลี่ยนแปลงข้อมูลใหม่ให้เท่ากับข้อมูลของ payload
          :
          setData // ถ้าไม่ใช่หรือหาไม่เจอให้เท่ากับข้อมูลเดิม
        ),
      };

    case DEL_CONTACT:
      return {
        ...state,
        storeA: state.storeA.filter(contact => //ให้ stroeA = หาใน stroeA ทั้งหมด ต้องไม่เท่ากับ(ตัดออกนั่นเอง) payload.id ที่ส่งมา
          contact.id !== action.payload), //payload ในที่นี้คือ id
      };

    default:
      return state
  }
}