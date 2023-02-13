import { Container } from "@mui/material";
import BackButton from "../components/BackButton";
import { TitleText, SubTitleText } from "../styles";
import { lightTheme } from "../themes";
import { StyledTextField } from "../styles";

export function AddWorkoutView() {
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
          flexDirection: "row",
          gap: 3,
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <StyledTextField
          variant="outlined"
          required
          label="Workout name"
        ></StyledTextField>
      </Container>
    </>
  );
}
