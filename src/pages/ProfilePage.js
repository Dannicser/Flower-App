import { Routes, Route } from "react-router-dom";
import AuthMain from "../components/Auth/AuthMain/AuthMain.js";
import AuthEnter from "../components/Auth/AuthEnter/AuthEnter";
import MainProfile from "../components/Profile/MainProfile/MainProfile";
import SettingsProfile from "../components/Profile/SettingsProfile/SettingsProfile.js";
import AuthCreateProfile from "../components/Auth/AuthCreateProfile/AuthCreateProfile.js";
import MyAddresses from "../components/Profile/Addresses/MyAddresses/MyAddresses.js";
import AddAddress from "../components/Profile/Addresses/AddAddress/AddAddress.js";
import PasswordUpdate from "../components/Auth/Password/UpdatePassword/UpdatePassword.js";
import RestorePassword from "../components/Auth/Password/RestorePassword/RestorePassword.js";
const ProfilePage = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthMain />} />
        <Route path="/auth/enter_with_email" element={<AuthEnter />} />
        <Route
          path="/auth/enter_with_email/forgot_password"
          element={<RestorePassword />}
        />
        <Route path="/settings/change_password" element={<PasswordUpdate />} />
        <Route path="/" element={<MainProfile />} />
        <Route path="/settings" element={<SettingsProfile />} />
        <Route path="/create_profile" element={<AuthCreateProfile />} />
        <Route path="/my_addresses" element={<MyAddresses />} />
        <Route path="/my_addresses/add_new_address" element={<AddAddress />} />
      </Routes>
    </>
  );
};
export default ProfilePage;
