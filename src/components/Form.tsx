"use client";
import { formProps } from "@/types"; //types
import React from "react";
import { useRef } from "react";

const Form = ({ children, action, className, onSubmit }: formProps) => {
  //props = inorder to use props you need to define the propTypes

  const ref = useRef<HTMLFormElement>(null);

  return (
    //since this file is client we need to use action to use server actions
    <form
      action={async (formData) => {
        await action(formData);
        ref.current?.reset(); //reset formdata
      }}
      onSubmit={onSubmit}
      ref={ref}
    >
      {children}
    </form>
  );
};

export default Form;
