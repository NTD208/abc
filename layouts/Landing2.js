import React from "react";

import Link from "next/link";
import LandingNavbar from "../components/common/Navbar/LandingNavbar.js";
import LandingFooter from "../components/common/Footer/LandingFooter.js";
import SCSS from "../components/common/Navbar/SCSSNavbar.module.scss";
import Button from "@mui/material/Button";
import { useRouter } from 'next/router';
import {changeProfileAction} from "../redux/actions/profileAction";
import {connect} from "react-redux";
import {snackActions} from "../helper/showSnackBar";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CheckIcon from '@mui/icons-material/Check';

function Landing2(props) {

    const router = useRouter()
    const navigateRegister = () => router.push("/organization/registration_vaccination_organization")

    const handleClickDownload = () => {
        <Link to="/sample_organ.ods" download></Link>
        // <a href='/sample_organ.ods' download>Click to download</a>
    };

    // onChange(e) {
    //     let files = e.target.files;
    // };

    const handleClickUpload = () => {
        <input type="file" />
    }

    return (
        <>
            <LandingNavbar transparent/>
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('http://baochinhphu.vn/Uploaded/tranducmanh/2021_07_21/Tiem.jpg')",
                        }}
                    >
                    </div>
                    <div class="grid gap-4 grid-cols-2">
                        <div className="container relative mx-auto my-6">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full px-4 ml-auto mr-auto text-center">
                                    <Button variant="contained" className={SCSS.downloadButton} onClick={handleClickDownload}>
                                        <FileDownloadIcon className="mr-5"> </FileDownloadIcon>
                                        <p>Download Excel mẫu</p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="container relative mx-auto my-6">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full px-4 ml-auto mr-auto text-center">
                                    <Button variant="contained" className={SCSS.btnMain} onClick={navigateRegister}>
                                        <i className="fas fa-plus mr-8"/>
                                        <p>Thêm đối tượng</p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="container relative mx-auto my-16">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full px-4 ml-auto mr-auto text-center">
                                    <Button variant="contained" className={SCSS.checkButton} onClick={handleClickDownload}>
                                        <CheckIcon className="mr-8"> </CheckIcon>
                                        <p>Gửi xét duyệt</p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="container relative mx-auto my-16">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full px-4 ml-auto mr-auto text-center">
                                    <Button variant="contained" className={SCSS.uploadButton} onClick={handleClickUpload}>
                                        <UploadFileIcon className="mr-5"> </UploadFileIcon>
                                        <p>Nhập danh sách đối tượng tiêm</p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {props.children}
            <LandingFooter/>
        </>
    );
}

const mapStateToProps = (state) => ({
    userInfo: state.authReducer,
});

const mapDispatchToProps = {
    changeProfileAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing2);