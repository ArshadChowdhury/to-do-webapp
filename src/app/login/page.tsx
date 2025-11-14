"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { loginApi } from "@/services/auth.service";
import { EyeOff, Eye } from "lucide-react";
import Link from "next/link";

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email address" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" }),
  rememberMe: z.boolean().optional(),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      toast.success("Login successful!");
      reset();
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Login failed!");
    },
  });

  const onSubmit = async (data: any) => {
    const { rememberMe, ...rest } = data;

    const formData = new FormData();
    formData.append("email", rest.email);
    formData.append("password", rest.password);

    await mutateAsync(formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col gap-4 md:flex-row">
      <div className="md:w-5/12 w-full h-84 md:h-screen">
        <Image
          className="w-full h-full object-cover"
          src="/banner/login-banner.svg"
          height={840}
          width={806}
          alt="Banner"
        />
      </div>

      <div className="md:w-7/12 w-full flex flex-col items-center justify-center gap-9">
        <div className="w-full flex flex-col gap-2 max-w-lg">
          <h2 className="text-3xl font-bold text-background-dark text-center">
            Log in to your account
          </h2>
          <p className="text-light-gray text-center">
            Start managing your tasks efficiently
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg w-full flex flex-col gap-4 text-black"
        >
          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              {...register("email")}
              className="w-full px-4 py-3 rounded-lg outline-none border border-light-border"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-error-red text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className="w-full px-4 py-3 rounded-lg outline-none border border-light-border"
                aria-invalid={errors.password ? "true" : "false"}
              />
              {/* Eye Button for Toggle */}
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700 transition"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {/* Toggle between Eye and EyeOff icons */}
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-error-red text-xs">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm mt-2">
            {/* Remember Me */}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                {...register("rememberMe")}
                className="w-4 h-4 accent-primary-blue cursor-pointer"
              />
              <span className="text-light-black">Remember me</span>
            </label>

            {/* Forgot Password */}
            <Link
              href="#"
              className="text-primary-blue text-sm hover:underline font-medium"
            >
              Forgot your password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 cursor-pointer rounded-lg font-semibold transition flex items-center justify-center ${
              isSubmitting
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-primary-blue text-white hover:bg-blue-600"
            }`}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Log In"
            )}
          </button>
          <p className="text-light-gray text-center">
            Don&apos;t have an account?{" "}
            <Link className="text-primary-blue" href={"/sign-up"}>
              Register now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
