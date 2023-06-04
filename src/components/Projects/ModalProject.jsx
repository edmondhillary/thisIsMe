import { GithubOutlined, YoutubeOutlined } from "@ant-design/icons";
import React from "react";
import CommingSoon from "../ComingSoon/ComingSoon";

const ModalProject = ({ subtitle, videoUrl, text, urlFront, urlBack }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <br />
      <br />
      {videoUrl ? (
        <>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%", // 16:9 aspect ratio (adjust as needed)
              maxWidth: "100%",
              height: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <YoutubeOutlined style={{ fontSize: "6rem", color: "#fff" }} />
            </a>
          </div>
        </>
      ) : (
        <>
          <CommingSoon />
        </>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "3rem",
          gap: "3rem",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {urlFront && urlBack && (
          <>
            <button
              className="btn btn-primary"
              onClick={() => {
                window.open(urlFront);
              }}
              style={{ marginBottom: "1rem" }}
            >
              <GithubOutlined style={{ padding: "1rem" }} />
              Front Code
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                window.open(urlBack ? urlBack : urlFront);
              }}
              style={{ marginBottom: "1rem" }}
            >
              <GithubOutlined style={{ padding: "1rem" }} />
              Backend Code
            </button>
          </>
        )}
      </div>

      <p
        style={{
          fontSize: "18px",
          color: "#fff",
          textAlign: "center",
          margin: "0 auto",
          maxWidth: "100%",
          whiteSpace: "pre-line",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default ModalProject;
