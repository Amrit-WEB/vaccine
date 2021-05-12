import * as getslotview from '../views/getSlotView';

export const getSlotResultDIS = (district_id) => {
    var time = new Date();
    const date = `${time.getDate()}-${time.getMonth()+1}-${time.getFullYear()}`;
    fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district_id}&date=${date}`)
    .then( response => response.json())
    
    .then( result => getslotview.renderSlots(result))
}

//pincode api
export const getSlotResultPIN = (pincode_id) => {
    var time = new Date();
    const date = `${time.getDate()}-${time.getMonth()+1}-${time.getFullYear()}`;
    fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode_id}&date=${date}`)
    .then( response => response.json())
    .then( result => getslotview.renderSlots(result))
}


