"use client";
import React from "react";
import { FormProvider } from "react-hook-form";

interface FormWrapperProps {
  children: React.ReactNode;
  form: any;
  submitAction: (e: React.FormEvent) => void;
}

export const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  form,
  submitAction,
}) => {
  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={submitAction} noValidate>
          {children}
        </form>
      </FormProvider>
    </div>
  );
};
