import { z } from "zod";

const plans = ["free", "basic", "medium", "pro"] as const;

export type Plans = (typeof plans)[number];

export const mappedPlans: { [key in Plans]: string } = {
  basic: "Basic",
  free: "Free",
  medium: "Medium",
  pro: "Pro",
};

export const userSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(3, {
        message: "Name must be at least 3 characters",
      })
      .max(200, {
        message: "Name must be at most 200 characters",
      }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Please enter a valid email",
      }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, {
        message: "Password must be at least 6 characters",
      }),
    confirmPassword: z
      .string({
        required_error: "Confirm password is required",
      })
      .min(6, {
        message: "Password must be at least 6 characters",
      }),
    weight: z
      .string({
        required_error: "Weight is required",
      })
      .refine((num) => !isNaN(parseFloat(num)), {
        message: "Weight must be a number",
      }),
    plan: z.enum(plans, {
      required_error: "Plan is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
