import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiProfile from "../../../API/(auth)/apiProfile";
import Button from "../../../components/Button";
import "./style.scss";

export default function ProfileCard() {
  const [profiles, setProfiles] = useState([]);
  const [fullName, setfullName] = useState("");
  const [defaultAddress, setDefaultAddress] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiProfile.getProfile();
        setProfiles(response.data);
        setfullName(response.data.firstName + " " + response.data.lastName);
        // Check if addresses is an array and not empty
        if (
          Array.isArray(response.data.addresses) &&
          response.data.addresses.length > 0
        ) {
          // Set the first address as the default address
          setDefaultAddress(response.data.addresses[0]);
        }
      } catch (error) {
        toast.error(error?.message);
      }
    };
    // Call the fetchProductGrid function
    fetchProfile();
  }, []);

  const image =
    "https://png.pngtree.com/element_our/20200611/ourlarge/pngtree-doggie-cute-cheap-expression-pack-avatar-image_2251655.jpg";

  // personal
  const [isEditing, setIsEditing] = useState(false);

  // change pass
  const [username, setUsername] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [passwordconfim, setPasswordconfim] = useState("");

  // show 1 trong 2
  const [showPersonal, setShowPersonal] = useState(true);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPersonal = () => {
    setShowPersonal(true);
    setShowChangePassword(false);
  };
  const handleShowChangePassword = () => {
    setShowPersonal(false);
    setShowChangePassword(true);
  };
  const handleLogout = () => {
    toast.success("Đăng xuất thành công");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleSave = () => {
    setIsEditing(!isEditing);
    toast.success("Thay đổi thông tin cá nhân thành công");
  };
  const handleChangePassword = () => {
    if (newpassword === passwordconfim) {
      // Thực hiện các bước thay đổi mật khẩu ở đây
      toast.success("Thay đổi mật khẩu thành công");
      setTimeout(() => {
        setUsername("");
        setNewpassword("");
        setPasswordconfim("");
      }, 2000);
    } else {
      // Hiển thị thông báo hoặc xử lý khi mật khẩu không khớp
      toast.error("Sai tài khoản hoặc mật khẩu");
    }
  };
  const handleCancel = () => {
    setUsername("");
    setNewpassword("");
    setPasswordconfim("");
  };
  return (
    <section>
      <div className="profile container-layout">
        <h1 className="profile-title">Profile information</h1>
        <div className="profile-content">
          <div className="profile-info">
            <img src={image} alt="" className="profile-img"></img>
            <div className="profile-accout">
              <span>{fullName}</span>
            </div>
          </div>
          <div className="profile-detail">
            <div className="profile-btn">
              <button
                className="profile-btn-personal"
                onClick={handleShowPersonal}
              >
                Personal Information
              </button>
              <button
                className="profile-btn-changepassword"
                onClick={handleShowChangePassword}
              >
                Change Password
              </button>
              <button className="profile-btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
            <div className={showPersonal ? "profile-show-personal" : "hidden"}>
              <div className="profile-name">
                <label className="profile-show-label">Họ và tên</label>
                <input
                  type="text"
                  defaultValue={fullName}
                  // onChange={handleName}
                  className="profile-show-input"
                ></input>
              </div>
              {/* <div className="profile-age">
                <label className="profile-show-label">Tuổi</label>
                <input
                  type="number"
                  value={age}
                  // onChange={handleAge}
                  className="profile-show-input"
                ></input>
              </div> */}
              <div className="profile-address">
                <label className="profile-show-label">Địa chỉ</label>
                {defaultAddress ? (
                  <input
                    type="text"
                    defaultValue={`${defaultAddress?.streetAddress}`}
                    className="profile-show-input"
                    readOnly
                  />
                ) : (
                  <p>Không có địa chỉ</p>
                )}
              </div>
              <div className="profile-email">
                <label className="profile-show-label">Email</label>
                <input
                  type="email"
                  defaultValue={profiles.email}
                  // onChange={handleEmail}
                  className="profile-show-input"
                ></input>
              </div>
              <div className="profile-phone">
                <label className="profile-show-label">Số điện thoại</label>
                <input
                  type="text"
                  defaultValue={profiles.mobile}
                  // onChange={handlePhonenumber}
                  className="profile-show-input"
                ></input>
              </div>
              <div className="profile-sex">
                <label className="profile-show-label">Giới tính</label>
                <input
                  type="radio"
                  defaultValue={profiles.gender}
                  checked={profiles.gender === "male"}
                  // onChange={handleGenderChange}
                />
                <label>Nam</label>

                <input
                  type="radio"
                  defaultValue={profiles.gender}
                  checked={profiles.gender === "female"}
                  // onChange={handleGenderChange}
                />
                <label>Nữ</label>
              </div>
              {/* <div className="profile-date">
                <label className="profile-show-label">Ngày Sinh</label>
                <input
                  type="date"
                  value={birthDate}
                  // onChange={handleDateChange}
                />
              </div> */}

              <div className="profile-btn-update">
                {/* Use the isEditing state to conditionally render "Chỉnh sửa" or "Lưu" button */}
                {isEditing ? (
                  <Button text="Lưu" onClick={handleSave} />
                ) : (
                  <Button text="Chỉnh sửa" onClick={handleEdit} />
                )}
              </div>
            </div>
            <div
              className={
                showChangePassword ? "profile-show-changepassword" : "hidden"
              }
            >
              <div className="profile-username">
                <label className="profile-show-label">Username</label>
                <input
                  type="text"
                  className="profile-show-input"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                ></input>
              </div>
              <div className="profile-password">
                <label className="profile-show-label">New Password</label>
                <input
                  type="password"
                  className="profile-show-input"
                  value={newpassword}
                  onChange={(event) => setNewpassword(event.target.value)}
                ></input>
              </div>
              <div className="profile-passwordconfim">
                <label className="profile-show-label">Confim Password</label>
                <input
                  type="password"
                  className="profile-show-input"
                  value={passwordconfim}
                  onChange={(event) => setPasswordconfim(event.target.value)}
                ></input>
              </div>
              <div className="profile-btn-change">
                <Button
                  type="submit"
                  text="Thay đổi mật khẩu"
                  className="profile-btn-submit"
                  onClick={handleChangePassword}
                ></Button>
                <Button
                  type="submit"
                  text="Hủy bỏ"
                  className="profile-btn-cancel"
                  onClick={handleCancel}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
