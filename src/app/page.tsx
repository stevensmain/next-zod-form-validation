"use client";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mappedPlans, userSchema } from "@/schemas/users";

import Button from "@/components/button";
import Input from "@/components/input";
import Select from "@/components/select";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  weight: string;
  plan: string;
};

export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const plansOptions = Object.entries(mappedPlans).map(([key, value]) => ({
    label: value,
    value: key,
  }));

  return (
    <main className="p-24">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <div className="mb-5">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                id="name"
                label="Your name"
                placeholder="John Doe"
                error={errors.name?.message}
                {...field}
              />
            )}
          />
        </div>

        {/* email */}
        <div className="mb-5">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                id="email"
                label="Your email"
                placeholder="example@example.com"
                error={errors.email?.message}
                {...field}
              />
            )}
          />
        </div>

        {/* password */}
        <div className="mb-5">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                id="password"
                label="Your password"
                error={errors.password?.message}
                {...field}
              />
            )}
          />
        </div>

        {/* confirm password */}
        <div className="mb-5">
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                id="repear-password"
                label="Your password"
                error={errors.confirmPassword?.message}
                {...field}
              />
            )}
          />
        </div>

        {/* weight */}
        <div className="mb-5">
          <Controller
            name="weight"
            control={control}
            render={({ field }) => (
              <Input
                type="number"
                id="weight"
                label="Your weight"
                error={errors.weight?.message}
                {...field}
              />
            )}
          />
        </div>

        {/* plans */}
        <div className="mb-5">
          <Controller
            name="plan"
            control={control}
            render={({ field }) => (
              <Select
                label="Plans"
                options={plansOptions}
                id="plan"
                error={errors.plan?.message}
                placeholder="Select a plan"
                {...field}
              />
            )}
          />
        </div>

        <Button type="submit">Register new account</Button>
      </form>
    </main>
  );
}
