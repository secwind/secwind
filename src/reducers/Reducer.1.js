import { GET_CONTACT, ADD_CONTACT, EDIT_CONTACT, DEL_CONTACT } from "../action/type";


// initialState คือ Store ทั้งหมดของ Redux Reducer 
const initialState = {

    // StoreData เป็น storeใหญ่ 
    // storeA เป็นลูกของ StoreData(ใหญ่) มาเป็นกราฟลงมาเรื่อย ถ้าลงเรียก storeB ถ้าไปทางขวาเรียก storeA1
    // storeA ในที่นี้เป็น Data ที่ชื่อว่า contact
    storeA: [
      { id:'1', name:'Wisanu',email:'wisanu@gmail.com', phone:'0917879494'},
      { id:'2', name:'SecWind',email:'secwind@gmail.com', phone:'0868261122'},
      { id:'3', name:'BoyPho',email:'boy@gmail.com', phone:'026448146'},
    ],
    storeB:[

    ],
}

// เปลี่ยน initialState  เป็น state คือ Store ทั้งหมดของ Redux Reducer ไป config กับ reducers/index
export default (state = initialState, action) => {
  switch (action.type) {
      case GET_CONTACT:
        return {
          ...state
        };

      case ADD_CONTACT:
        return {
          ...state,
          storeA: [action.payload, ...state.storeA],
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
