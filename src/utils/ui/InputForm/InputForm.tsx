"use client";
import React from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { InputProps } from "@/features/auth/types";

export const InputForm: React.FC<InputProps> = ({
  label,
  name,
  type,
  size,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <TextField
        size={size}
        type={type}
        {...register(name)}
        name={name}
        label={label}
        required
        helperText={errors[name]?.message as string}
        error={!!errors[name]?.message}
        sx={{
          width: "100%",
        }}
      />
    </div>
  );
};
