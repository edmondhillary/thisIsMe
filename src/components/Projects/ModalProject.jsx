import { GithubOutlined } from "@ant-design/icons";
import React from "react";
import ReactPlayer from "react-player";
import CommingSoon from "../ComingSoon/ComingSoon";

const ModalProject = ({ subtitle, videoUrl, text, urlFront, urlBack }) => {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <h2>{subtitle}</h2> */}
      <br />
      <br />
      {videoUrl ? (
        <>
          <div>
            <ReactPlayer url={videoUrl} width='560px' height='315px' controls />
          </div>
        </>
      ) : (
        <>
          <CommingSoon />
        </>
      )}

      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "3rem",
          gap: "3rem",
          flexDirection: "row",
        }}
      >
        {urlFront && urlBack && (
          <>
            <button
              className='btn btn-primary'
              onClick={() => {
                window.open(urlFront);
              }}
            >
              <GithubOutlined style={{ padding: "1rem" }} />
              Front Code
            </button>
            <button
              className='btn btn-primary'
              onClick={() => {
                window.open(urlBack ? urlBack : urlFront);
              }}
            >
              <GithubOutlined style={{ padding: "1rem" }} />
              Backend Code
            </button>
          </>
        )}
      </span>

      <h4 style={{ fontSize: "14px" }}>{text}</h4>
    </span>
  );
};

export default ModalProject;
