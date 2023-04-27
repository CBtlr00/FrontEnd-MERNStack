import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    fetch("https://irishairways.adaptable.app/api/user", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
          setIsLogin(true);
          setIsAdmin(data.user.isAdmin);
        }
      })
      .catch((err) => console.log(err));
  }, [user]);

  return {
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    photo: user?.photo,
    address: user?.address,
    isAdmin: isAdmin,
    id: user?._id,
    user: user,
    isLogin: isLogin,
    setIsLogin,
    setIsAdmin,
  };
};

export default useAuth;