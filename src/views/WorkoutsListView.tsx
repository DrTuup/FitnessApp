import BackButton from "../components/backbutton";
import { SubTitleText, TitleText } from "../styles";

function WorkoutsListView() {
  return (
    <>
      <BackButton />
      <center>
        <TitleText>Workouts</TitleText>
        <SubTitleText>Recent workouts from you!</SubTitleText>
      </center>
    </>
  );
}

export default WorkoutsListView;
