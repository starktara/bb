import React from "react";
import "./BulkUpload.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class BulkUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      loaded: 0,
    };
  }

  onChangeHandler = (event) => {
    const files = event.target.files[0];
    console.log(files);
    this.setState({
      selectedFile: files,
    });
  };

  onClickHandler = () => {
    const data = new FormData();

    //checking whether the state is empty if yes the error would be thrown
    if (this.state.selectedFile === null) {
      //toaster for the notification
      toast.error("Please Select the file");
    } else {
      data.append("file", this.state.selectedFile);
      data.append("name", this.state.selectedFile.name);

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

  render() {
    return (
      <div
        style={{ textAlign: "center", justifyContent: "center", padding: 50 }}
        class="container"
      >
        <div class="col-md-6">
          <p style={{ fontSize: 40, fontWeight: "bold" }}> Bulk Upload Menu</p>
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
                onChange={this.onChangeHandler}
                type="file"
                class="form-control"
              />
            </div>
          </form>

          <button class="btn" onClick={this.onClickHandler}>
            Upload Files
          </button>
        </div>
      </div>
    );
  }
}

export default BulkUpload;
