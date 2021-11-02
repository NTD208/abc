import * as TYPE from "../types/profileType";

const initialState = {
    dataRegistration: {}
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.GET_INFO_REGISTRATION_VACCINATION:
            if(Object.keys(action.dataRegistrationVaccination).length === 0){
                state.dataRegistration = {}
            } else {
                state.dataRegistration = {
                    nameVaccinePlace : action.dataRegistrationVaccination.name_vaccine_place,
                    idPriority : action.dataRegistrationVaccination.id_priority,
                    idDangkytiem : action.dataRegistrationVaccination.id_dangkytiem,
                    isSick : action.dataRegistrationVaccination.is_sick,
                    status : action.dataRegistrationVaccination.status,
                    idUser : action.dataRegistrationVaccination.id_user,
                    idVaccinePlace : action.dataRegistrationVaccination.id_vaccine_place,
                    date : action.dataRegistrationVaccination.date,
                    note : action.dataRegistrationVaccination.note,
                    numberOfTimes : action.dataRegistrationVaccination.number_of_times,
                }
            }
            return { ...state }

        default:
            return { ...state }
    }
}

export default profileReducer