import { Container } from "@mui/material";
import BackButton from "../components/BackButton";
import { TitleText, SubTitleText, StyledButton } from "../styles";
import { StyledTextField } from "../styles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

export function AddWorkoutView() {
  const [dateValue, setDataValue] = React.useState<Date | null>(new Date());

  function SaveWorkout() {
    var value =
      dateValue?.toJSON().slice(0, 10).split("-") ??
      new Date().toJSON().slice(0, 10).split("-");
    var d = new Date(
      parseInt(value[0]),
      parseInt(value[1]) - 1,
      parseInt(value[2])
    );
    console.log(d.toLocaleDateString());
  }

  return (
    <>
      <BackButton />
      <center>
        <TitleText>Add a workout</TitleText>
        <SubTitleText>You're doing great!</SubTitleText>
      </center>
      <Container
        sx={{
          display: "flex",
          maxWidth: "100vw",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
          justifyContent: "space-evenly",
          minWidth: "30vw",
          flexWrap: "wrap",
        }}
      >
        <StyledTextField variant="outlined" required label="Workout name" />
        <LocalizationProvider dateAdapter={AdapterDayjs} id="date">
          <DatePicker
            label="Basic example"
            value={dateValue ?? new Date()}
            inputFormat="DD/MM/YYYY"
            onChange={(newValue) => {
              setDataValue(newValue);
            }}
            renderInput={(params) => <StyledTextField {...params} />}
          />
        </LocalizationProvider>

        <StyledButton variant="contained" onClick={SaveWorkout}>
          Save
        </StyledButton>
      </Container>
    </>
  );
}
