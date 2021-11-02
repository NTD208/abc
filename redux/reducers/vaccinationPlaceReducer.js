import * as TYPE from "../types/vaccinationPlaceType";
import {GET_ALL_VACCINATION_PLACE} from "../types/vaccinationPlaceType";

const initialState = {
    dataVaccinationPlace: []
}

const vaccinationPlaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.GET_ALL_VACCINATION_PLACE:
            state.dataVaccinationPlace = [...action.dataVaccinationPlace];
            return {...state};
        
        default:
            return {...state};
    }
}

export default vaccinationPlaceReducer;