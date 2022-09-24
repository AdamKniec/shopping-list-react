import { IconButton, ListItem, ListItemText } from "@mui/material";
import MaterialList from "@mui/material/List";
import DeleteIcon from "@mui/icons-material/Delete";
import { ListItem as ListItemType, ListProps } from "./List.types";

// TODO REMOVE HARDCODED VALUES BELOW!

export const List = (props: ListProps) => {
  const { listItems } = props;
  return (
    <MaterialList>
      {listItems?.map((item: ListItemType) => {
        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText>{item.productName}</ListItemText>
          </ListItem>
        );
      })}
    </MaterialList>
  );
};
