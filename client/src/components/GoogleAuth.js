import React, { Component } from "react";

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "238761158251-l5ulh1cote6m148lfaetis5lmftq66fp.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
