import { DateRange, FitnessCenter } from "@mui/icons-material";
import React from "react";
import { StyledBox, BoxTitle, Row, StyledButton } from "../styles";
import { Workout } from "../models/Workout";
import { WorkoutModal } from "./WorkoutModal";

export function Workoutbox(workout: Workout) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledBox sx={{ gap: 0 }}>
      <BoxTitle>{workout.name}</BoxTitle>
      <Row>
        <DateRange /> {workout.date.toLocaleDateString()}
      </Row>
      <Row>
        <FitnessCenter />
        {workout.exercises.length} exercises - {workout.exercises.length * 4}{" "}
        sets
      </Row>
      <StyledButton onClick={handleOpen}>More details</StyledButton>
      <WorkoutModal
        workout={workout}
        state={open}
        onClose={handleClose}
      ></WorkoutModal>
    </StyledBox>
  );
}
