import Landing2 from "../../layouts/Landing2";
import React, {useEffect} from "react";
import DataTableRegisterVaccinationOrganization from "../../components/pages/registration_vaccination_organization/DataTableRegisterVaccinationOrganization";
import {connect} from "react-redux";
import {useRouter} from "next/router";
import {snackActions} from "../../helper/showSnackBar";

function RegisterVaccinationOrganization(props) {
    return (
        <Landing2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4 my-24">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <DataTableRegisterVaccinationOrganization />
                    </div>
                </div>
            </div>
        </Landing2>
    )
}

const mapStateToProps = (state) => ({
    userInfo: state.authReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterVaccinationOrganization);