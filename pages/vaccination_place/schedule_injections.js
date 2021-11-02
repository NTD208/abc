import {useEffect, useState} from "react";
import Management from "../../layouts/Management";
import ScheduleInjectionsTable from "../../components/pages/schedule_injections/ScheduleInjectionsTable";
import {closeLoadingAction, openLoadingAction} from "../../redux/actions/loaderAction";
import {accountsServices, registrationVaccineServices, userServices} from "../../services/servicesAPI";
import {HTTP_200} from "../../services/define_HTTP";
import {snackActions} from "../../helper/showSnackBar";
import {getAllRegistrationAction} from "../../redux/actions/scheduleInjectionsAction";
import {useRouter} from "next/router";

export default function ScheduleInjections() {

    const router = useRouter()

    const [namePlace, setNamePace] = useState('');

    const fetchData = async () => {
        try{
            const res = await userServices.getMyVaccinationPlaceServices()
            if(res.status === HTTP_200 && res.data.status){
                setNamePace(res.data.data.name_place)
            }else{
                router.push("/")
            }
        }catch (e) {
            router.push("/")
        }
    }

    useEffect(()=>{
        fetchData();
    }, [])

    return (
        <Management>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                        <div className="my-5 ml-2 uppercase text-blueGray-600 text-lg font-bold ">
                            Duyệt đăng ký tiêm - Điểm tiêm : {namePlace}
                        </div>
                        <ScheduleInjectionsTable/>
                    </div>
                </div>
            </div>
        </Management>
    );
}