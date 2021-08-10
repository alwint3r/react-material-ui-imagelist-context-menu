import {
  ImageList,
  ImageListItem,
  ListSubheader,
  makeStyles,
} from "@material-ui/core";
import { EnhanchedImageListItem } from "./EnhanchedImageListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },

  imageList: {
    height: 450,
  },
}));

export function EnhanchedImageList(props) {
  const classes = useStyles();
  const { data = [], renderContextMenu = () => null } = props;

  return (
    <div className={classes.root}>
      <ImageList rowHeight={300} className={classes.imageList} cols={4}>
        <ImageListItem key="subheader" cols={4} style={{ height: "auto" }}>
          <ListSubheader component="div">Gallery</ListSubheader>
        </ImageListItem>
        {data.map((row, idx) => (
          <EnhanchedImageListItem
            data={row}
            renderContextMenu={renderContextMenu}
            key={idx}
          />
        ))}
      </ImageList>
    </div>
  );
}
