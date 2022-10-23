import { Modal, useMantineTheme } from "@mantine/core";
import Button from "@mui/material/Button";
import "./model.css";
function Models({ modelOpened, setModelOpened }) {
  const theme = useMantineTheme();

  return (
    <div className="mn">
      <Modal
        opened={modelOpened}
        onClose={() => setModelOpened(false)}
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <form className="info">
          <h3>Add User</h3>
          <div className="infos">User Name</div>
          <div>
            <input type="text" className="infoInput" name="username" />
          </div>
          <div className="infos">Mobile Number</div>
          <div>
            <input type="text" className="infoInput" name="lastname" />
          </div>
          <div className="infos">Email</div>
          <div>
            <input type="text" className="infoInput" name="worksAt" />
          </div>
          <div className="infos">Password</div>
          <div>
            <input type="Password" className="infoInput" name="worksAt" />
          </div>
          <div className="infos">Confirm Password</div>
          <div>
            <input type="Password" className="infoInput" name="worksAt" />
          </div>
          <div className="infos">Upload Photo</div>
          <div>
            <input
              type="file"
              className="infoInput"
              id="myFile"
              name="filename"
            />
          </div>
          <Button
            variant="contained"
            style={{
              textTransform: "capitalize",
              borderRadius: "8px",
              paddingLeft: 30,
              paddingRight: 30,
              marginLeft: 150,
              marginTop: 15,
            }}
          >
            Add User
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default Models;
