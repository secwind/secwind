import { GET_CONTACT, ADD_CONTACT, EDIT_CONTACT, DEL_CONTACT } from "../action/type";


// initialState คือ Store ทั้งหมดของ Redux Reducer 
const initialState = {

    // StoreData เป็น storeใหญ่ 
    // storeA เป็นลูกของ StoreData(ใหญ่) มาเป็นกราฟลงมาเรื่อย ถ้าลงเรียก storeB ถ้าไปทางขวาเรียก storeA1
    // storeA ในที่นี้เป็น Data ที่ชื่อว่า contact

    storeA: [

    ],
    storeB:[

    ],
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
          storeA: state.storeA == action.payload,
      };

      case DEL_CONTACT:
        return {
          ...state,
          storeA: state.storeA.filter(contact => //ให้ stroeA = หาใน stroeA ทั้งหมด ต้องไม่เท่ากับ(ตัดออกนั่นเอง) payload.id ที่ส่งมา
          contact.id !== action.payload),  //payload ในที่นี้คือ id
        };  

      default:
        return state
      }
}
