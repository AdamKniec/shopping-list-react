export interface ListItem {
  id: number;
  productName: string;
}

export interface ListProps {
  listItems: ListItem[];
  arialabel: string;
  buttonPositioningEdge: "end" | undefined | "start";
}
