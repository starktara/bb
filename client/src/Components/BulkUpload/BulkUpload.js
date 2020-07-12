import React from "react";
import "./BulkUpload.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core";
import questionIcon from "../../assets/questionIcon.png";
import closeIcon from "../../assets/Close.png";

const useStyles = makeStyles((theme) => ({
  modalBoxSuccess: {
   "overflow-y":"scroll",
   "overflow-x":"hidden",
    position: "absolute",
    width: "60%",
    height:"70%",
    backgroundColor: "red",
    color: "white",
    border: "0 solid #fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
}));

const BulkUpload = () => {
  
const classes = useStyles();
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleModalClose = () => {
    setOpen(false);
  };

  const onChangeHandler = (event) => {
    const files = event.target.files[0];
    console.log(files);

    setSelectedFile(files);
  };

  const onClickHandler = () => {
    const data = new FormData();

    //checking whether the state is empty if yes the error would be thrown
    if (selectedFile === null) {
      //toaster for the notification
      toast.error("Please Select the file");
    } else {
      data.append("file", selectedFile);
      data.append("name", selectedFile.name);

      console.log(data);
      //accessing the backendapi
      axios
        .post("/apis/bulkUpload/Upload", data)
        .then((res) => {
          // then print response status
          console.log(res.statusText);
          toast.success("Upload successfull !! ");
        })
        .catch((err) => {
          toast.error("upload fail");
        });
    }
  };

  return (
    <>
      <MainMenu />
      <div
        style={{ textAlign: "center", justifyContent: "center", padding: 50 }}
        class="container"
      >
        <div class="col-md-6">
          <p style={{ fontSize: 40, fontWeight: "bold", marginBottom: '10px' }}> Bulk Upload Menu</p>
          <img src={questionIcon} height={25} style={{cursor: 'pointer'}} onClick={()=>setOpen(true)}/>
          {/**react toaster file */}

          <React.Fragment class="form-group">
            <ToastContainer />
          </React.Fragment>

          <form enctype="multipart/form-data" method="post">
            <div class="form-group files">
              <input
                name="file"
                accept=".zip,.rar,.7zip"
                class="btn"
                onChange={onChangeHandler}
                type="file"
                class="form-control"
              />
            </div>
          </form>

          <button class="btn" onClick={onClickHandler}>
            Upload Files
          </button>
        </div>

        {/*modal*/}

        <Modal
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
          }}
          open={open}
          onClose={handleModalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.modalBoxSuccess}>
            <h4>Instructions for Bulk Upload</h4>
            <p style={{marginTop: '0px', marginLeft:'10px '}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum purus eu ligula convallis varius. In tristique, ex sed porta ornare, enim mi congue est, sit amet ultricies purus tellus a lectus. Duis mauris urna, suscipit in venenatis non, euismod vel orci. Cras eu nulla non dui tincidunt iaculis quis non ante. Nulla imperdiet neque et dui tempor, eu congue neque vulputate. Vivamus ac imperdiet elit, sit amet mattis enim. Etiam ut urna placerat, gravida neque vel, imperdiet sapien. Praesent purus augue, posuere et sollicitudin id, condimentum sit amet nulla. Aenean vehicula felis nec varius pellentesque. Cras sed volutpat mi, ut eleifend tellus. Phasellus at tincidunt eros, ac malesuada augue. Donec faucibus eleifend orci, quis consequat ipsum tempor ut. Aliquam cursus consequat purus, ut volutpat nunc condimentum eget. Nullam sed convallis velit.

Integer eu ultricies dolor, at malesuada urna. Cras est dui, dignissim vel dictum id, euismod eget ligula. Donec eros lectus, viverra eu nisl et, mattis varius mauris. Sed eget tincidunt mi, sed sollicitudin ante. Aliquam erat volutpat. Ut viverra, augue quis pulvinar sodales, justo velit lacinia est, a interdum eros tellus vitae nibh. Integer at ligula iaculis, laoreet justo vitae, consectetur purus. Proin nisi ipsum, ultrices non laoreet non, ultricies vel lacus. Mauris viverra condimentum volutpat. Aliquam sed ipsum a velit sodales accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel interdum elit.

Maecenas justo ex, iaculis nec sem at, finibus semper nisl. Proin vehicula erat vitae ornare porta. Suspendisse sit amet eros nec felis pretium aliquam. Duis viverra sem eget varius consectetur. Pellentesque hendrerit tempor felis. Integer lobortis gravida erat quis varius. Mauris facilisis ac mauris id sollicitudin. Nullam porttitor velit nisi, ut feugiat elit vulputate a. Nunc massa odio, tincidunt mollis pellentesque tempus, cursus non erat. Aenean id tristique nisl. Fusce pharetra metus in elit lobortis, non gravida nulla iaculis. Integer semper id orci eget maximus. Vivamus aliquam a est sit amet interdum. Nulla vel pellentesque ipsum, vitae vestibulum eros.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut turpis dui, congue sit amet luctus sit amet, euismod in mi. Donec sollicitudin a nulla ac lobortis. Praesent aliquet tortor augue, vitae placerat arcu faucibus quis. Nunc lacinia, velit ut ornare cursus, turpis sem sagittis neque, vel porttitor ex lorem nec elit. Aenean interdum diam et dui fringilla porttitor. Curabitur dignissim mattis orci, non dignissim lacus bibendum sed.

Nulla facilisi. In hac habitasse platea dictumst. Nullam in rhoncus diam. Etiam sit amet suscipit felis. Nullam commodo diam turpis, nec commodo dui luctus a. Proin a tempor ligula. Vestibulum sed maximus augue, in mollis leo. Sed nec vehicula augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, erat id pellentesque feugiat, nulla nisl semper nulla, nec sagittis est nibh vel augue. In scelerisque tellus a dignissim varius. Phasellus sem libero, bibendum ac nunc eget, ornare pharetra est. Fusce cursus justo ac orci bibendum vulputate. Donec eu ultrices ipsum, at finibus ligula. Aliquam bibendum fermentum aliquam.
            </p>
            <img
              style={{ marginLeft: "10px", marginTop: '-10px', cursor: "pointer" }}
              onClick={handleModalClose}
              src={closeIcon}
              height="20"
              alt=""
            />
            </div>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default BulkUpload;
