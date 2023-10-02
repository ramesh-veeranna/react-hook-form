import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "./css/style.css";

type formValues = {
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  email: string;
  age: number;
  dob: Date;
  doj: Date;
  address: string;
  address2: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  job: {
    position: string;
    salary: string;
    experience: string;
    company: string;
    address: string;
  };
  skills: string[];
};

type arrayItems = number[];

const EditEmployee = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<arrayItems | []>([]);

  const handleAddSkill = () => {
    setItems((items) => [...items, Math.floor(Math.random() * 100000) + 1]);
  };
  const handleRemoveSkill = (selectedItem: number) => {
    console.log(items, selectedItem);
    if (selectedItem !== 0) {
      setItems(items.filter((item) => item !== selectedItem));
    }
  };

  const form = useForm<formValues>({
    defaultValues: {
      firstName: "Joey",
      middleName: "Francis",
      lastName: "Tribbiani",
      email: "joey.tribbiani@gmail.com",
      phone: "9935123456",
      age: 25,
      dob: new Date(),
      doj: new Date(),
      address: "#1311, 25th Main, Jayanagar 9th Block,",
      address2: "Electronic City, Phase 1, Bengaluru",
      landmark: "Devegowda Road",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560099",
      job: {
        position: "Sr Full Stack Developer",
        salary: "3,25,00,000.00",
        experience: "16 years",
        company: "Google",
        address: "1600 Amphitheatre Parkway Mountain View, California, US",
      },
    },
    /*
    // we can use any dynamic data from api response 
    defaultValues: async (id) => {
      const response = await fetch(
        `https://jsonplacholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      return {
        firstName: data.user.first,
        lastName: data.user.last,
      };
    }, */
  });
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
            <Grid container item={true} xs={12} justifyContent="space-between">
              <Typography variant="h4" sx={{ fontWeight: 500 }}>
                Edit Employee Data
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
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item={true} xs={12} mt={1}>
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                Personal Detail
              </Typography>
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
            <Grid xs={3} item={true}>
              <TextField
                id="age"
                {...register("age", {
                  valueAsNumber: true,
                  required: {
                    value: true,
                    message: "Please enter age",
                  },
                })}
                size="small"
                fullWidth
                label="Age"
                placeholder="Enter Age"
                variant="outlined"
                helperText={errors.age?.message}
                error={errors.age?.message ? true : false}
              />
            </Grid>
            <Grid xs={3} item={true}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker"]}
                  sx={{ marginTop: "-8px !important" }}
                >
                  <DatePicker
                    label="Date Of Birth"
                    slotProps={{
                      textField: {
                        size: "small",
                        error: errors.dob?.message ? true : false,
                        helperText: errors.dob?.message,
                      },
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid xs={3} item={true}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker"]}
                  sx={{ marginTop: "-8px !important" }}
                >
                  <DatePicker
                    label="Date Of Join"
                    slotProps={{
                      textField: {
                        size: "small",
                        error: errors.doj?.message ? true : false,
                        helperText: errors.doj?.message,
                      },
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item={true} xs={12} mt={2}>
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                Address Detail
              </Typography>
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
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item={true} xs={12} mt={2}>
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                Job
              </Typography>
            </Grid>
            <Grid xs={4} item={true}>
              <TextField
                id="job.position"
                {...register("job.position", {
                  required: {
                    value: true,
                    message: "Please enter position",
                  },
                })}
                size="small"
                fullWidth
                label="Position"
                placeholder="Enter Position"
                variant="outlined"
                helperText={errors.job?.position?.message}
                error={errors.job?.position?.message ? true : false}
              />
            </Grid>
            <Grid xs={4} item={true}>
              <TextField
                id="job.experience"
                {...register("job.experience", {
                  required: {
                    value: true,
                    message: "Please enter experience",
                  },
                })}
                size="small"
                fullWidth
                label="Experience"
                placeholder="Enter Experience"
                variant="outlined"
                helperText={errors.job?.experience?.message}
                error={errors.job?.experience?.message ? true : false}
              />
            </Grid>
            <Grid xs={4} item={true}>
              <TextField
                id="job.salary"
                {...register("job.salary", {
                  required: {
                    value: true,
                    message: "Please enter salary",
                  },
                })}
                size="small"
                fullWidth
                label="Salary"
                placeholder="Enter Salary"
                variant="outlined"
                helperText={errors.job?.salary?.message}
                error={errors.job?.salary?.message ? true : false}
              />
            </Grid>
            <Grid xs={4} item={true}>
              <TextField
                id="job.company"
                {...register("job.company", {
                  required: {
                    value: true,
                    message: "Please enter company name",
                  },
                })}
                size="small"
                fullWidth
                label="Company"
                placeholder="Enter Company Name"
                variant="outlined"
                helperText={errors.job?.company?.message}
                error={errors.job?.company?.message ? true : false}
              />
            </Grid>
            <Grid xs={8} item={true}>
              <TextField
                id="job.address"
                {...register("job.address", {
                  required: {
                    value: true,
                    message: "Please enter address",
                  },
                })}
                size="small"
                fullWidth
                label="Company Address"
                placeholder="Enter Company Address"
                variant="outlined"
                helperText={errors.job?.address?.message}
                error={errors.job?.address?.message ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid
              container
              item={true}
              xs={12}
              mt={2}
              justifyContent="space-between"
            >
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                Skills
              </Typography>
              <Button variant="contained" size="small" onClick={handleAddSkill}>
                Add Skill
              </Button>
            </Grid>
            {items.map((item, index) => (
              <>
                <Grid xs={4} item={true}>
                  <TextField
                    id="skills"
                    {...register(`skills.${item}`, {
                      required: {
                        value: true,
                        message: "Please enter skill",
                      },
                    })}
                    size="small"
                    fullWidth
                    label="Skill"
                    placeholder="Enter Skill"
                    variant="outlined"
                    helperText={errors.skills?.[item]?.message}
                    error={errors.skills?.[item]?.message ? true : false}
                  />
                </Grid>
                <Grid xs={8} item={true}>
                  {index > 0 && (
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        handleRemoveSkill(item);
                      }}
                    >
                      Remove
                    </Button>
                  )}
                </Grid>
              </>
            ))}
            <Grid item={true} xs={12} mt={2} mb={4}>
              <Button
                variant="contained"
                type="submit"
                sx={{ paddingX: "40px" }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default EditEmployee;
