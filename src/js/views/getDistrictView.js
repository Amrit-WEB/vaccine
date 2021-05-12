import { elements } from "../views/elements";

export const renderDistrict = (districtName) => {
  districtName.districts.forEach((index) => {
    let markup = `
    <option value="${index.district_id}">${index.district_name}</option>
    `;
    elements.districtname.insertAdjacentHTML("beforeend", markup);
  });
};


export const clearDistrictResult = () => {
    elements.districtname.innerHTML = '<option value="">Select Your District</option>';
};
