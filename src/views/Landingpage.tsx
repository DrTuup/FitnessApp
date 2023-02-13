import { FitnessCenter, Scale } from "@mui/icons-material";
import { Container } from "@mui/material";
import {
  BoxTitle,
  Row,
  StyledBox,
  StyledButton,
  SubTitleText,
  TitleText,
} from "../styles";

function LandingPage() {
  return (
    <>
      <center>
        <TitleText>Fitnesstool</TitleText>
        <SubTitleText>Fitness progress visualized!</SubTitleText>
      </center>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 5,
          flexWrap: "wrap",
          maxWidth: "100vw",
        }}
      >
        <StyledBox>
          <BoxTitle>Workouts</BoxTitle>
          <Row>
            <FitnessCenter />
            Last workout: 10.10.2021
          </Row>
          <StyledButton
            variant="contained"
            onClick={() => (window.location.href = "/addworkout")}
          >
            Add workout
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={() => (window.location.href = "/workouts")}
          >
            List workouts
          </StyledButton>
        </StyledBox>
        <StyledBox>
          <BoxTitle>Physique</BoxTitle>
          <Row>
            <Scale />
            Last measurement: 10.10.2021
          </Row>
          <StyledButton variant="contained">Add measurement</StyledButton>
          <StyledButton variant="contained">List measurements</StyledButton>
        </StyledBox>
      </Container>
    </>
  );
}

export default LandingPage;
