import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthMain from "../components/Auth/AuthMain/AuthMain.js";
import AuthEnter from "../components/Auth/AuthEnter/AuthEnter";
import MainProfile from "../components/Profile/MainProfile/MainProfile";
import SettingsProfile from "../components/Profile/SettingsProfile/SettingsProfile.js";
import AuthCreateProfile from "../components/Auth/AuthCreateProfile/AuthCreateProfile.js";
import MyAddresses from "../components/Profile/MyAddresses/MyAddresses.js";
const ProfilePage = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthMain />} />
        <Route path="/auth/enter_with_email" element={<AuthEnter />} />
        <Route path="/" element={<MainProfile />} />
        <Route path="/settings" element={<SettingsProfile />} />
        <Route path="/create_profile" element={<AuthCreateProfile />} />
        <Route path="/my_addresses" element={<MyAddresses />} />
      </Routes>
    </>
  );
};
export default ProfilePage;
