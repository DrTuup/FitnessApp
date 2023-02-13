import { ArrowBack } from "@mui/icons-material";
import { StyledBackButton } from "../styles";

function BackButton() {
  return (
    <StyledBackButton onClick={() => (window.location.href = "/")}>
      <ArrowBack />
    </StyledBackButton>
  );
}

export default BackButton;
