import React from "react";
import PropTypes from "prop-types";
import EditBio from './EditBio';
import { setBio, getProfile } from "../api";
import profHPhoto from '../profh.jpg';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBio: true,
      showEdit: false,
      person: null,
    }
  }

  // this is called before when the component is "mounted" on the DOM
  componentDidMount() {
    getProfile(this.props.id).then(data => {
      this.setState({ person: data })
    });
  }

  toggleBio = () => {
    const newShowBio = !this.state.showBio;
    // only need to include keys of state we're changing
    this.setState({ showBio: newShowBio });
  }

  toggleEditBio = () => {
    const newShowEditBio = !this.state.showEdit;
    // only need to include keys of state we're changing
    this.setState({ showEdit: newShowEditBio });
  }

  saveBio = (newBio) => {
    this.setState({ showEdit: false });
    setBio(this.props.id, newBio).then(data => this.setState({ person: data }));
  }

  render() {
    // since the fetching of data is async, we need to display
    // something (anything!) while we wait for it to complete
    if (this.state.person === null) {
      return <div>Loading...</div>
    }
    return <div>
      {/* All profiles will have prof h's photo...for now */}
      <img src={profHPhoto} />
      <h3>{this.state.person.name}</h3>

      {/* Only show the bio if showBio is set to true! */}
      { this.state.showBio ? <p>{ this.state.person.bio }</p> : null }

      {/* Attach function to call when the button is clicked */}
      <button onClick={this.toggleBio}>{ this.state.showBio ? "Hide" : "Show" } Bio</button>
      <button onClick={this.toggleEditBio}>{ this.state.showEdit ? "Cancel" : "Edit Bio" }</button>

      {/* We pass in a function to call when we change the bio */}
      { this.state.showEdit ? <EditBio person={this.state.person} onSubmit={this.saveBio} /> : null }
    </div>
  }
}

Profile.propTypes = {
  id: PropTypes.number.isRequired,
}

export default Profile;