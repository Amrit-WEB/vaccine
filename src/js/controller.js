import '../css/custom.css';
import {elements} from './views/elements';
import * as getstates from './models/GetState';
import * as getstatesview from './views/getStateView';
import * as getdistrict from './models/GetDistrict';
import * as getdistrictview from './views/getDistrictView';
import * as getslot from './models/GetSlot';
import * as getslotview from './views/getSlotView';



//Getting States And District in Search bar
//1.get State
getstates.getStateResult();
//2.get district after selecting state
elements.statename.addEventListener('change',function(){

    //clearing district list for renderning another state district
    getdistrictview.clearDistrictResult();
    //getting state id
    const stateID = getstatesview.getstateID();
    if(stateID != 0){
        getdistrict.getDistrictResult(stateID);
        
    }

 })

 //Getting Vaccine Slots Table
 //By District Code
 elements.searchbtndis.addEventListener('click',function(){
    //displayinf table section then data loading
    elements.tablesection.style.display = 'flex';
    //clearing slot table for rendering another data
    getslotview.clearSlotResult();
    //getting district id
    const districtID = getslotview.getdistrictID();
     if(districtID !=0){
        getslot.getSlotResultDIS(districtID);
     }
    
 })
 //By Pincode
 elements.searchbtnpin.addEventListener('click',function(){
     //displayinf table section then data loading
    elements.tablesection.style.display = 'flex';
    //clearing slot table for rendering another data
    getslotview.clearSlotResult();
    //getting district id
    const pincodeID = getslotview.getpincodeID();
     if(pincodeID !=0){
        getslot.getSlotResultPIN(pincodeID);
     }
 })
 




