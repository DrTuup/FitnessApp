import { DateRange, Delete, FitnessCenter, Scale } from "@mui/icons-material";
import {
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Workout } from "../models/Workout";
import { BoxTitle, ExerciseTitle, Row, StyledBox } from "../styles";
import { lightTheme } from "../themes";

interface WorkoutModalProps {
  workout: Workout;
  state: boolean;
  onClose: () => void;
}

export function WorkoutModal({ workout, state, onClose }: WorkoutModalProps) {
  function calculateTotalWeight() {
    // calculate total weight lifted during this workout
    let totalWeight = 0;
    workout.exercises.forEach((exercise) => {
      exercise.sets.forEach((set) => {
        totalWeight += set.volume;
      });
    });
    return totalWeight;
  }

  return (
    <Modal open={state} onClose={onClose}>
      <StyledBox
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxHeight: "85vh",
          minWidth: "300px",
        }}
      >
        <Button
          sx={{
            background: "red",
            width: "fit-content",
            position: "absolute",
            top: "10px",
            right: "10px",
            "&:hover": {
              background: "red",
            },
          }}
        >
          <Delete sx={{ color: lightTheme.colors.onPrimary }} />
        </Button>
        <BoxTitle>{workout.name}</BoxTitle>
        <Row>
          <DateRange />
          {workout.date.toLocaleDateString()}
        </Row>
        <Row>
          <FitnessCenter /> {workout.exercises.length} exercises -{" "}
          {workout.exercises.length * 4} sets
        </Row>
        <Row>
          <Scale /> {calculateTotalWeight()} kg
        </Row>
        {/* <BoxTitle>Exercises and sets done during this workout</BoxTitle> */}
        {workout.exercises.map((exercise) => (
          <>
            <ExerciseTitle>{exercise.name}</ExerciseTitle>
            <TableContainer style={{ maxHeight: undefined }}>
              <Table size="small">
                <TableBody>
                  {exercise.sets.map((set) => (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={{ color: lightTheme.colors.onPrimary }}>
                        {set.reps} reps
                      </TableCell>
                      <TableCell sx={{ color: lightTheme.colors.onPrimary }}>
                        {set.weight} kg
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ))}
      </StyledBox>
    </Modal>
  );
}
