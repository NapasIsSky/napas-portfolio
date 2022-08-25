import { observer } from "mobx-react-lite";
import { Typography } from "@mui/material";

import { COLORS } from "../../../constants";

interface ITextButton {
  id: string;
  title: string;
  onClick: () => void;
}

const TextButton = (props: ITextButton) => {
  const { title, onClick, id } = props;

  return (
    <Typography
      id={id}
      component={"a"}
      onClick={onClick}
      textTransform={"uppercase"}
      variant={"button"}
      color={COLORS.textPrimary}
      sx={{ cursor: "pointer" }}
    >
      {title}
    </Typography>
  );
};

export default observer(TextButton);
