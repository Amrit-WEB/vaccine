import * as getstatesview from '../views/getStateView';

export const getStateResult = () => {
    fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/states`)
    .then( response => response.json())
    .then( result => getstatesview.renderStates(result))
}