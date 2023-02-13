import { Container } from "@mui/material";
import BackButton from "../components/BackButton";
import { SubTitleText, TitleText } from "../styles";
import { Workoutbox } from "../components/Workoutbox";
import { Workouts } from "../data";

function WorkoutsListView() {
  return (
    <>
      <BackButton />
      <center>
        <TitleText>Workouts</TitleText>
        <SubTitleText>Recent workouts from you!</SubTitleText>
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
        {Workouts.map((workout) => (
          <Workoutbox {...workout} />
        ))}
      </Container>
    </>
  );
}

export default WorkoutsListView;
