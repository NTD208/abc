import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {snackActions} from "../../../helper/showSnackBar";
import {validationInvalid} from "../../../helper/validate/validation";
import TextField from "@mui/material/TextField";
import RegisterStyle from "../registration_vaccination/RegisterStyle.module.scss";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import {getAllVaccinationPlace} from "../../../redux/actions/vaccinationPlaceAction";
import {registrationVaccinationAction} from "../../../redux/actions/registrationVaccinationAction";
import {connect} from "react-redux";
import {dataHealth, dataPriorities} from "../registration_vaccination/RegistrationVaccinationForm";
import {dataAllCity, dataAllDistrict, dataAllSubDistrict} from "../vaccination_place/AddVaccinationPlace";
import {getRegistrationVaccination} from "../../../redux/actions/profileAction";

function ProfileCard(props) {

    let {dataRegistration} = props.dataRegistration

    useEffect(() => {
        props.getRegistrationVaccination();
    }, [])

    const renderInfoRegistration = () => {
        if(Object.keys(dataRegistration).length === 0){
            return (
                <>
                    <div className="mb-2 text-blueGray-600">
                        Chưa đăng ký tiêm
                    </div>
                </>
            )
        }else{
            return (
                <>
                    <div className="mb-2 text-blueGray-600">
                        <b>Điểm tiêm: </b> {dataRegistration.nameVaccinePlace}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                        <b>Đối tượng tiêm: </b>{dataPriorities[dataRegistration.idPriority - 1].name_priority}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                        <b>Mũi tiêm thứ: </b>{dataRegistration.numberOfTimes}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                        <b>Tình trạng: </b>{dataRegistration.isSick ? "Ốm" :"Bình thường"}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                        <b>Ghi chú: </b>{dataRegistration.note}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                        <b>Trạng thái đơn đăng ký: </b>{dataRegistration.status ? <b className="text-green-700">Đã duyệt</b> : <b className="text-yellow-700">Chờ duyệt</b>}
                    </div>
                </>
            )
        }
    }

    return (
        <div className="mt-12 p-8">
            <h3 className="text-center text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Thông tin đơn đăng ký tiêm
            </h3>
            {renderInfoRegistration()}
        </div>
    );
}

const mapStateToProps = (state) => ({
    dataRegistration: state.profileReducer
});

const mapDispatchToProps = {
    getRegistrationVaccination
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);