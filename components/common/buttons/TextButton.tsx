import { Typography } from "@mui/material";

import { COLORS } from "../../../constants";
import { IBaseComponent } from "../../../types";

interface ITextButton extends IBaseComponent {
  title: string;
  onClick: () => void;
}

const TextButton: React.FC<ITextButton> = (props) => {
  const { title, onClick, id } = props;

  return (
    <Typography
      id={id}
      component={"a"}
      onClick={onClick}
      variant={"button"}
      color={COLORS.textPrimary}
      sx={{ cursor: "pointer", textTransform: "uppercase" }}
    >
      {title}
    </Typography>
  );
};

export default TextButton;
