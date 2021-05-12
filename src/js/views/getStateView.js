import { elements } from "../views/elements";
export const getstateID = () => elements.statename.value;
export const renderStates = (stateName) => {
  stateName.states.forEach((index) => {
    let markup = `
    <option value="${index.state_id}">${index.state_name}</option>
    `;
    elements.statename.insertAdjacentHTML("beforeend", markup);
  });
};

