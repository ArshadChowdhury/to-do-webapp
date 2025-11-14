import { api } from "@/lib/axios";

export const signupApi = async (formData: FormData) => {
  const res = await api.post("api/users/signup/", formData);
  console.log(res);

  if (res.status === 201) {
    return true;
  }

  throw new Error("Unexpected server response");
};

export const loginApi = async (formData: FormData) => {
  const res = await api.post("api/auth/login/", formData);
  console.log(res);

  if (res.status === 200) {
    return true;
  }

  throw new Error("Unexpected server response");
};
