import { ImageListItem, ImageListItemBar, Menu } from "@material-ui/core";
import { useState } from "react";

const initialState = {
  mouseX: null,
  mouseY: null,
};

export function EnhanchedImageListItem(props) {
  const { renderContextMenu, data = {} } = props;
  const [state, setState] = useState(initialState);

  const handleClick = (event) => {
    if (renderContextMenu) {
      event.preventDefault();
      setState({
        mouseX: event.clientX - 2,
        mouseY: event.clientY - 4,
      });
    }
  };

  const handleClose = () => {
    setState(initialState);
  };

  return (
    <ImageListItem onContextMenu={handleClick}>
      <img src={data.picture} alt={data.title} />
      <ImageListItemBar title={data.title} />

      {typeof renderContextMenu === "function" ? (
        <Menu
          open={state.mouseY !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={
            state.mouseY !== null && state.mouseX !== null
              ? { top: state.mouseY, left: state.mouseX }
              : undefined
          }
        >
          {renderContextMenu(data, handleClose)}
        </Menu>
      ) : null}
    </ImageListItem>
  );
}
