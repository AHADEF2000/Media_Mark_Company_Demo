"use client";
import React, { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Container,
  Text,
  useToast,
} from "@chakra-ui/react";
import sendContactForm from "@/lib/api";

const formValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const initState = { values: formValues, isLoading: false, error: "" };

const Form = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;
  const [touched, setTouched] = useState({} as any);

  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      // this function we used to handle the input change
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  const handleBluer = ({ target }: any) =>
    setTouched((prev: any) => ({
      // this function we used to check if the input is touched or not
      ...prev,
      [target.name]: true,
    }));

  const handleSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message Sent Successfully",
        description: "We will get back to you soon",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message || "Something went wrong",
      }));
    }
  };
  return (
    <>
      <Container>
        {error && (
          <Text className="text-center text-lg text-teal-950">{error}</Text>
        )}
        <FormControl
          isRequired
          className="mb-4"
          isInvalid={touched.name && !values.name}
        >
          <Input
            type="text"
            name="name"
            className=" mb-4 w-full rounded bg-teal-50 p-2 text-main-color focus:outline-none"
            value={values.name}
            onBlur={handleBluer}
            placeholder="Your First & Last Name *"
            onChange={handleChange}
          />
          <FormErrorMessage className="text-white">Required *</FormErrorMessage>
        </FormControl>
        <div className="mb-4 flex w-full gap-4">
          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            className="flex-1"
          >
            <Input
              type="email"
              name="email"
              className="mb-4 w-full rounded bg-teal-50 p-2 text-main-color focus:outline-none"
              value={values.email}
              onBlur={handleBluer}
              placeholder="Your Email Adress *"
              onChange={handleChange}
            />
            <FormErrorMessage className="text-white">
              Required *
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.phone && !values.phone}
            className="flex-1"
          >
            <Input
              type="text"
              name="phone"
              className="mb-4 w-full rounded bg-teal-50 p-2 text-main-color focus:outline-none"
              value={values.phone}
              onBlur={handleBluer}
              placeholder="Your Phone Number *"
              onChange={handleChange}
            />
            <FormErrorMessage className="text-white">
              Required *
            </FormErrorMessage>
          </FormControl>
        </div>
        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          className="mb-4"
        >
          <Textarea
            name="message"
            rows={5}
            className="mb-4  w-full rounded bg-teal-50 p-2 text-main-color focus:outline-none"
            value={values.message}
            onBlur={handleBluer}
            placeholder="Please Leave a Brief Message About Your Project *"
            onChange={handleChange}
          />
          <FormErrorMessage className="text-white">Required *</FormErrorMessage>
        </FormControl>

        <Button
          isLoading={isLoading}
          onClick={handleSubmit}
          disabled={
            !values.name || !values.email || !values.phone || !values.message
          }
          className="my-4 rounded bg-teal-50 px-4 py-2 text-main-color transition duration-300 ease-in-out hover:bg-teal-800 hover:text-white"
          type="submit"
        >
          Submit
        </Button>
      </Container>
    </>
  );
};

export default Form;
