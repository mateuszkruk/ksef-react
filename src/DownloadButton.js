import React, { Component } from "react";
import { Button } from "@mui/material";
import html2pdf from "html2pdf.js";
import "./App.css";

const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
const ID = searchParams.get('ID')
const DownloadButtons = () => {
  const handleDownload = () => {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
  
    // Set the HTTP method and URL
    xhr.open('GET', `/API/generate-pdf/${ID}`);
  
    // Set the responseType to 'blob' to handle binary data
    xhr.responseType = 'blob';
  
    // Define a callback function to handle the response
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Create a temporary URL from the response blob
        const url = URL.createObjectURL(xhr.response);
  
        // Create a link element
        const link = document.createElement('a');
        link.href = url;
        link.download = 'invoice.pdf';
  
        // Programmatically click the link to trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  
        // Revoke the object URL to free up memory
        URL.revokeObjectURL(url);
      }
    };
  
    // Send the request
    xhr.send();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleDownload}>
      Download PDF
    </Button>
  );
};
class DownloadButton extends Component{
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {

  }

  render() {
    return <div className="sticky-div">
      {DownloadButtons()}
      </div>
  }
}
export default DownloadButton;
