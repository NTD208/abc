import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {connect} from "react-redux";

import rolePage from './role_page'
import {getInfoUser} from "../../redux/actions/authAction";
import Cookies from 'js-cookie'
import {USER_TOKEN} from "../define";

function RouterGuard(props) {
    const router = useRouter();

    const [authorized, setAuthorized] = useState(false);

    let {userInfo} = props.userInfo

    const checkUrlInRole = (url, role) => {
        let result = rolePage[role].find((element) => {
            return url.includes(element);
        });
        return !!result;
    }

    const urlCheck = async (url) => {
        let info = {}
        if (typeof (Cookies.get(USER_TOKEN)) !== "undefined" && Cookies.get(USER_TOKEN).length !== 0) {
            try {
                info = await props.getInfoUser()
                if (Object.keys(info).length === 0) {
                    if(url === "/") return true
                    await router.push('/login')
                }
            } catch (e) {
                if(url === "/") return true
                await router.push('/login')
            }
        }
        if(url === "/") return true
        if (checkUrlInRole(url, "PUBLIC")) {
            return true
        } else if (checkUrlInRole(url, "USER_LOGIN")) {
            if (Object.keys(info).length !== 0) {
                return true
            }else{
                await router.push('/login')
                return false
            }
        } else {
            if (Object.keys(info).length === 0) {
                await router.push('/login')
                return false
            }else{
                let role = info.role
                if (checkUrlInRole(url, "ADMIN") && role.toString() === "1") {
                    return true
                } else if (checkUrlInRole(url, "MANAGEMENT") && role.toString() === "2") {
                    return true
                } else if (checkUrlInRole(url, "VACCINATION_PLACE") && role.toString() === "3") {
                    return true
                } else if (checkUrlInRole(url, "ORGANIZATION") && role.toString() === "4") {
                    return true
                } else {
                    await router.push('/')
                    return false
                }
            }
        }
    }

    const contentCheck = async (url) => {
        if(url === "/") return
        if (checkUrlInRole(url, "PUBLIC")) {
            return
        } else if (checkUrlInRole(url, "USER_LOGIN")) {
            if (Object.keys(userInfo).length !== 0) {
                return
            } else {
                await router.push('/login')
                return
            }
        } else {
            if (Object.keys(userInfo).length !== 0) {
                let role = userInfo.idRole
                if (checkUrlInRole(url, "ADMIN") && role.toString() === "1") {
                    return
                } else if (checkUrlInRole(url, "MANAGEMENT") && role.toString() === "2") {
                    return
                } else if (checkUrlInRole(url, "VACCINATION_PLACE") && role.toString() === "3") {
                    return
                } else if (checkUrlInRole(url, "ORGANIZATION") && role.toString() === "4") {
                    return
                } else {
                    await router.push('/')
                    return
                }
            } else {
                await router.push('/login')
                return
            }
        }
    }


    const onOpenWeb = async (url) => {
        return await urlCheck(url)
    }

    const hideContent = async (url) => {
        setAuthorized(false);
    }

    const authCheck = async (url) => {
        await contentCheck(url)
        setAuthorized(true);
    }

    useEffect(() => {
        router.events.on('routeChangeStart', hideContent);
        router.events.on('routeChangeComplete', authCheck);
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }
    }, [userInfo, authorized])

    useEffect(() => {
        onOpenWeb(router.pathname).then((data) => {
            if (data && !authorized) {
                setAuthorized(true);
            }
        })
    }, [])

    if (authorized) {
        return props.children
    } else {
        return (
            <>
                <section className="relative w-full h-full py-40 min-h-screen">
                    <div
                        className="absolute top-0 w-full h-full bg-no-repeat bg-full"
                        style={{
                            backgroundColor: "var(--primary-color)",
                        }}
                    />
                </section>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.authReducer
});

const mapDispatchToProps = {
    getInfoUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RouterGuard);
