const rolePage = {
    // 0 mac dinh ai cung vao dc
    "PUBLIC": [
        "/login",
        "/login/send_email",
        "/login/verify_otp",
        "/register",
        "/register/register_organization",
    ],
    // phải đăng nhập mới vào đc
    "USER_LOGIN": [
        "/register_vaccine",
        "/profile",
        "/registration_vaccination"
    ],
    // 1 admin
    "ADMIN": [
        "/admin",
    ],
    // 2 quan ly
    "MANAGEMENT": [
        "/management",
        "/management/vaccination_place",
        "/management/vaccine",
        "/management/account_organization",
    ],
    // 3 quan ly diem tiem
    "VACCINATION_PLACE": [
        "/vaccination_place",
        "/vaccination_place/schedule_injections",
    ],
    // 4 doanh nghiep
    "ORGANIZATION": [
        "/organization/home",
    ],
    // 5 nguoi dan
    "USER": [

    ],
}
export default rolePage;