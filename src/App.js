import { makeStyles, MenuItem } from "@material-ui/core";
import { CardContent, Card } from "@material-ui/core";
import { useState } from "react";
import { EnhanchedImageList } from "./EnhanchedImageList";

import data from "./image-data.json";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState({});

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <pre>{JSON.stringify(selectedItem)}</pre>
      </CardContent>
      <CardContent>
        <EnhanchedImageList
          data={data}
          renderContextMenu={(data, handleClose) => (
            <MenuItem
              onClick={() => {
                setSelectedItem(data);
                handleClose();
              }}
            >
              Select
            </MenuItem>
          )}
        />
      </CardContent>
    </Card>
  );
}

export default App;
