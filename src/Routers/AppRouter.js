import AuthEnterWithEmail from "../components/Auth/AuthEnterWithEmail/AuthEnterWithEmail";
import AuthMain from "../components/Auth/AuthMain/AuthMain";
import RestorePassword from "../components/Auth/Password/RestorePassword/RestorePassword";
import AuthCreateProfile from "../components/Auth/AuthCreateProfile/AuthCreateProfile";
//
import PasswordUpdate from "../components/Auth/Password/UpdatePassword/UpdatePassword";
import MainProfile from "../components/Profile/MainProfile/MainProfile";
import SettingsProfile from "../components/Profile/SettingsProfile/SettingsProfile";
import MyAddresses from "../components/Profile/Addresses/MyAddresses/MyAddresses";
import AddAddress from "../components/Profile/Addresses/AddAddress/AddAddress";
import Orders from "../components/Profile/Orders/Orders";

export const publicRoutes = [
  { path: "/", component: AuthMain },
  { path: "/auth/enter_with_email", component: AuthEnterWithEmail },
  { path: "/auth/create_profile", component: AuthCreateProfile },
  { path: "/auth/enter_with_email/forgot_password", component: RestorePassword },
];

export const privetRoutes = [
  { path: "/", component: MainProfile },
  { path: "/settings", component: SettingsProfile },
  { path: "/my_addresses", component: MyAddresses },
  { path: "/my_addresses/add_new_address", component: AddAddress },
  { path: "/settings/change_password", component: PasswordUpdate },
  { path: "/orders", component: Orders },
];
