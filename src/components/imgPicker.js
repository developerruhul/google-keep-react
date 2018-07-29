import React from "react";
import styled from "styled-components";

const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  padding: 1px;
  margin: 0 auto;

  input {
    display: none;
  }

  .profile-picture {
    border: 1px solid #9e9e9e;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-size: cover;
  }
`;

const bgStyle = imgUrl => {
  return {
    backgroundImage: `url(${imgUrl})`
  };
};

class ImgPicker extends React.Component {
  state = {
    imgLoaded: false
  };

  imgChange = e => {
    const file = e.target.files[0];

    const url = URL.createObjectURL(file);
    this.setState({
      imgLoaded: url
    });

    this.props.onChange(file);
  };

  render() {
    const imgStyle = this.state.imgLoaded ? bgStyle(this.state.imgLoaded) : {};

    return (
      <ProfilePicture>
        <input
          className="image"
          type="file"
          name="avatar"
          accept="image/png, image/jpeg"
          id="profile-picture"
          onChange={this.imgChange}
          required
        />
        <label
          style={imgStyle}
          className="profile-picture"
          htmlFor="profile-picture"
        >
          {!this.state.imgLoaded && (
            <img src={require("../assets/camera.png")} alt="user" />
          )}
        </label>
      </ProfilePicture>
    );
  }
}

export default ImgPicker;
