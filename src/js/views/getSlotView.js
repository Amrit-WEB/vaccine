import { elements } from "../views/elements";
//value taking from district option in search bar
export const getdistrictID = () => elements.districtname.value;
//value taking from pincode option in search bar
export const getpincodeID = () => elements.pincode.value;

//Rendering table in required elements
export const renderSlots = (slotdata) => {
  //Render Date
  var today = new Date();
  for (var i = 0; i < 7; i++) {
    let markupdate = `
        <div class="day col-1 text-dark">
        <span>${today.getDate() + i}-${
      today.getMonth() + 1
    }-${today.getFullYear()}
            </span></div>
        `;

        document.querySelector('.booking_date').insertAdjacentHTML("beforeend", markupdate);
  }

  //Render Centers data
  slotdata.centers.forEach((index, key) => {
    let markupCenter = `
    
        <div class="center_data">
          <div class="center_name_css center_name_${key} col-4 bg-light">
            <h6>${index.name}</h6>
            <p>${index.address},${index.district_name}-${index.pincode}</p>
          </div>
          
          
        </div>
      
    `;
    elements.slotdatarender.insertAdjacentHTML("beforeend", markupCenter);
    index.sessions.forEach((arg) => {
      let markupslots = `
      <div class="center_status col-1 ">
            <span class="span1_cen_status bg-success">${arg.available_capacity}</span>
            <span class="span2_cen_status text-info">${arg.vaccine}</span>
            <span class="span3_cen_status text-danger" style="font-size:10px;font-weight:600;">Age: ${arg.min_age_limit}+</span>
        </div>
         `;

         document.querySelector(`.center_name_${key}`).insertAdjacentHTML("afterend", markupslots);
    });
  });
};

//for clearing table
export const clearSlotResult = () => (elements.slotdatarender.innerHTML = `<div class="booking_date bg-light">
<div class="col-4"></div>
<!--Idhar current 7days ka Date Aayega Render Hoke-->
</div>`);

