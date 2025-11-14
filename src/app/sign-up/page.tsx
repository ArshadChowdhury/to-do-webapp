"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, User, Lock, ChevronLeft, EyeOff, Eye } from "lucide-react";
import Link from "next/link";

const SignupSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First name is required" })
      .regex(/^[A-Za-z\s-]+$/, {
        message: "Please enter a valid name format",
      }),
    lastName: z
      .string()
      .min(1, { message: "Last name is required" })
      .regex(/^[A-Za-z\s-]+$/, {
        message: "Please enter a valid name format",
      }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Must be a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 4 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: any) => {
    // Mock API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form Submitted Successfully:", data);
    alert("Signup successful! Check console for data.");
    reset(); // Clear form after successful submission
  };

  return (
    <div className="min-h-screen bg-white flex flex-col gap-4 md:flex-row">
      <div className="md:w-5/12 w-full h-84 md:h-screen">
        <Image
          className="w-full h-full object-cover"
          src="/banner/auth-banner.svg"
          height={840}
          width={806}
          alt="Banner"
        />
      </div>

      <div className="md:w-7/12 w-full flex flex-col items-center justify-center gap-9">
        <div className="w-full flex flex-col gap-2 max-w-lg">
          <h2 className="text-3xl font-bold text-background-dark text-center">
            Create your account
          </h2>
          <p className="text-light-gray text-center">
            Start managing your tasks efficiently
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 text-black"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                {...register("firstName")}
                className="w-full px-4 py-3 rounded-lg outline-none border border-light-border"
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors.firstName && (
                <p className="text-error-red text-xs">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                className="w-full px-4 py-3 rounded-lg outline-none border border-light-border"
                aria-invalid={errors.lastName ? "true" : "false"}
              />
              {errors.lastName && (
                <p className="text-error-red text-xs">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

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

          {/* Confirm Password Field */}
          <div className="space-y-1">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium flex items-center"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="w-full px-4 py-3 rounded-lg outline-none border border-light-border"
              aria-invalid={errors.confirmPassword ? "true" : "false"}
            />
            {errors.confirmPassword && (
              <p className="text-error-red text-xs">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Sign Up Button */}
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
              "Sign Up"
            )}
          </button>
          <p className="text-light-gray text-center">
            Already have an account ?{" "}
            <Link className="text-primary-blue" href={"/login"}>
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
