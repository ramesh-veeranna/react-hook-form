import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";

type formValues = {
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  address2: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
};

const CreateEmployee = () => {
  const navigate = useNavigate();
  const form = useForm<formValues>();
  const [submitted, setSubmitted] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  // Instead of this destructuring,   we can use directly in the TextField as props
  // const { name, ref, onChange, onBlur } = register("firstName");

  const onSubmit = (data: formValues) => {
    console.log("Form submitted", data);
    setSubmitted(data.toString());
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box sx={{ width: "100%" }}>
          <Grid
            xs={12}
            direction={"row"}
            container
            sx={{ marginTop: 4 }}
            spacing={2}
          >
            <Grid
              container
              item={true}
              xs={12}
              mb={4}
              justifyContent="space-between"
            >
              <Typography variant="h4" sx={{ fontWeight: 500 }}>
                Employee Form
              </Typography>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back to Employees List
              </Button>
            </Grid>
            <Grid xs={4} item={true}>
              {/* 
            Instead of this, we can use below eg. 
            for register function this -> 
            {...register("firstName")} 
            directly in the TextField as props
            <TextField
              id="firstName"
              name={name}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
              size="small"
              fullWidth
              label="First Name"
              placeholder="Enter First Name"
              variant="outlined"
            /> */}

              <TextField
                id="firstName"
                {...register("firstName", {
                  required: "Please enter first name",
                  minLength: {
                    value: 3,
                    message: "Enter atleat minimum 3 characters",
                  },
                })}
                size="small"
                fullWidth
                label="First Name"
                placeholder="Enter First Name"
                variant="outlined"
                helperText={errors.firstName?.message}
                error={errors.firstName?.message ? true : false}
              />
            </Grid>
            <Grid xs={4} item={true}>
              <TextField
                id="middleName"
                {...register("middleName", {
                  required: {
                    value: true,
                    message: "Please enter middle name",
                  },
                })}
                size="small"
                fullWidth
                label="Middle Name"
                placeholder="Enter Middle Name"
                variant="outlined"
                helperText={errors.middleName?.message}
                error={errors.middleName?.message ? true : false}
              />
            </Grid>
            <Grid xs={4} item={true}>
              <TextField
                id="lastName"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Please enter last name",
                  },
                })}
                size="small"
                fullWidth
                label="Last Name"
                placeholder="Enter Last Name"
                variant="outlined"
                helperText={errors.lastName?.message}
                error={errors.lastName?.message ? true : false}
              />
            </Grid>
            <Grid xs={6} item={true}>
              <TextField
                id="phone"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Please enter phone number",
                  },
                })}
                size="small"
                fullWidth
                label="Phone Number"
                placeholder="Enter Phone Number"
                variant="outlined"
                helperText={errors.phone?.message}
                error={errors.phone?.message ? true : false}
              />
            </Grid>
            <Grid xs={6} item={true}>
              <TextField
                id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter email",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email format",
                  },
                  // validate: (val) => {
                  //   return (
                  //     val !== "admin@gmail.com" ||
                  //     "Enter  a different email address"
                  //   );
                  // },

                  validate: {
                    notAdmin: (val) => {
                      return (
                        val !== "admin@gmail.com" ||
                        "Enter  a different email address"
                      );
                    },
                    notBlockList: (val) => {
                      return (
                        !val.endsWith("yahoo.com") ||
                        "This domain is not supported"
                      );
                    },
                  },
                })}
                size="small"
                fullWidth
                label="Email Id"
                placeholder="Enter Email Id"
                variant="outlined"
                helperText={errors.email?.message}
                error={errors.email?.message ? true : false}
              />
            </Grid>
            <Grid xs={12} item={true}>
              <TextField
                id="address"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Please enter address",
                  },
                })}
                size="small"
                fullWidth
                label="Address 1"
                placeholder="House No. #, Floor, Building Name"
                variant="outlined"
                helperText={errors.address?.message}
                error={errors.address?.message ? true : false}
              />
            </Grid>
            <Grid xs={8} item={true}>
              <TextField
                id="address2"
                {...register("address2", {
                  required: {
                    value: true,
                    message: "Please enter address",
                  },
                })}
                size="small"
                fullWidth
                label="Address 2"
                placeholder="Area Name, Locality, Main Road"
                variant="outlined"
                helperText={errors.address2?.message}
                error={errors.address2?.message ? true : false}
              />
            </Grid>
            <Grid xs={4} item={true}>
              <TextField
                id="landmark"
                {...register("landmark", {
                  required: {
                    value: true,
                    message: "Please enter landmark",
                  },
                })}
                size="small"
                fullWidth
                label="Landmark"
                placeholder="Enter Landmark"
                variant="outlined"
                helperText={errors.landmark?.message}
                error={errors.landmark?.message ? true : false}
              />
            </Grid>
            <Grid xs={4} item={true}>
              <TextField
                id="city"
                {...register("city", {
                  required: {
                    value: true,
                    message: "Please enter city name",
                  },
                })}
                size="small"
                fullWidth
                label="City"
                placeholder="Enter City Name"
                variant="outlined"
                helperText={errors.city?.message}
                error={errors.city?.message ? true : false}
              />
            </Grid>
            <Grid xs={4} item={true}>
              <TextField
                id="state"
                {...register("state", {
                  required: {
                    value: true,
                    message: "Please enter state name",
                  },
                })}
                size="small"
                fullWidth
                label="State"
                placeholder="Enter State Name"
                variant="outlined"
                helperText={errors.state?.message}
                error={errors.state?.message ? true : false}
              />
            </Grid>
            <Grid xs={4} item={true}>
              <TextField
                id="pincode"
                {...register("pincode", {
                  required: {
                    value: true,
                    message: "Please enter pincode",
                  },
                })}
                size="small"
                fullWidth
                label="Pincode"
                placeholder="Enter Pincode"
                variant="outlined"
                helperText={errors.pincode?.message}
                error={errors.pincode?.message ? true : false}
              />
            </Grid>
            <Grid item={true} xs={12} mt={2}>
              <Button
                variant="contained"
                type="submit"
                sx={{ paddingX: "40px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default CreateEmployee;
