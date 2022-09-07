import React, { useState } from "react";
import { useSelector } from "react-redux";

const PhotoForm = () => {
  // const userId = useSelector((state) => state.session.user.id);

  // let photoData = {
  //   title: "",
  //   description: "",
  //   userId,
  //   photoFile: "",
  //   photoUrl: "",
  // };

  // const [photo, setPhoto] = useState(photoData);

  // const handleInput = (e) => {
  //   this.setState({ title: e.currentTarget.value });
  // };

  // const handleFile = (e) => {
  //   const file = e.currentTarget.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     this.setState({ photoFile: file, photoUrl: fileReader.result });
  //   };
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("post[title]", this.state.title);
  //   if (this.state.photoFile) {
  //     formData.append("post[photo]", this.state.photoFile);
  //   }
  //   $.ajax({
  //     url: "/api/posts",
  //     method: "POST",
  //     data: formData,
  //     contentType: false,
  //     processData: false,
  //   }).then(
  //     (response) => console.log(response.message),
  //     (response) => {
  //       console.log(response.responseJSON);
  //     }
  //   );
  // };
  // console.log(this.state);
  // const preview = this.state.photoUrl ? (
  //   <img src={this.state.photoUrl} />
  // ) : null;
  // return (
  //   <>
  //     <form onSubmit={this.handleSubmit.bind(this)}>
  //       <label htmlFor="post-body">Body of Post</label>
  //       <input
  //         type="text"
  //         id="post-body"
  //         value={this.state.title}
  //         onChange={this.handleInput.bind(this)}
  //       />
  //       <input type="file" onChange={this.handleFile.bind(this)} />
  //       <h3>Image preview </h3>
  //       {preview}
  //       <button>Make a new Post!</button>
  //     </form>
  //   </>
  // );
};

export default PhotoForm;
