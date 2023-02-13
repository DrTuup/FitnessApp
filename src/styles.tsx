import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { lightTheme } from "./themes";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: fit-content;
  border-radius: 10px;
  background-color: ${lightTheme.colors.primary};
  color: ${lightTheme.colors.onPrimary};
`;

export const BoxTitle = styled.h3`
  margin: 0;
  font-weight: 700;
  color: ${lightTheme.colors.onPrimary};
`;

export const ExerciseTitle = styled.h3`
  margin: 0;
  font-weight: 700;
  color: ${lightTheme.colors.onPrimary};
`;

export const Row = styled.span`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

export const TitleText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${lightTheme.colors.onBackground};
`;

export const SubTitleText = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${lightTheme.colors.onBackground};
`;

export const StyledButton = styled(Button)`
  background-color: ${lightTheme.colors.secondary};
  color: ${lightTheme.colors.onSecondary};

  &:hover {
    background-color: ${lightTheme.colors.secondary};
    color: ${lightTheme.colors.onSecondary};
  }
`;

export const StyledBackButton = styled(Button)`
  background-color: ${lightTheme.colors.primary};
  color: ${lightTheme.colors.onPrimary};
  position: absolute;
  top: 1rem;
  left: 1rem;

  &:hover {
    background-color: ${lightTheme.colors.primary};
    color: ${lightTheme.colors.onPrimary};
  }
`;
