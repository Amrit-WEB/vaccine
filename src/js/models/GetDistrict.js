import * as getdistrictview from '../views/getDistrictView';

export const getDistrictResult = (state_id) => {
    fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`)
    .then( response => response.json())
    .then( result => getdistrictview.renderDistrict(result))
}

