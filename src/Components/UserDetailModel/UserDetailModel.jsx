import { Button, Modal, Group } from "@mantine/core";
import { useState } from "react";
import "./UserDetailModel.css";

const UserDetailModel = ({ modelOpened, setModelOpened, data }) => {
  // console.log(data);
  return (
    <div className="UserDetailModel">
      <Modal
        title="User Detail"
        opened={modelOpened}
        size="45%"
        onClose={() => setModelOpened(false)}
      >
        <div className="About-Company">
          <div className="company">
            <span style={{ color: "navy" }}>Company </span>
            <span
              style={{
                fontSize: "1.3rem",
                fontWeight: "500",
                color: "var(--caloryCard)",
              }}
            >
              {" "}
              - {data.data.company.name}{" "}
            </span>
          </div>
          <div className="user-info">
            <span>{data.data.company.catchPhrase}</span>
            <span>{data.data.company.bs}</span>
          </div>
        </div>

        <div className="container">
          <div className="left">
            <div className="name">
              <span
                style={{ fontSize: "1.3rem", fontWeight: "500", color: "navy" }}
              >
                Name
              </span>
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "400",
                  color: "var(--caloryCard)",
                }}
              >
                {data.data.name}
              </span>
            </div>
            <div className=" name Username">
              <span
                style={{ fontSize: "1.3rem", fontWeight: "500", color: "navy" }}
              >
                Username
              </span>
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "400",
                  color: "var(--caloryCard)",
                }}
              >
                {data.data.username}
              </span>
            </div>
            <div className="name email">
              <span
                style={{ fontSize: "1.3rem", fontWeight: "500", color: "navy" }}
              >
                e-mail
              </span>
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "400",
                  color: "var(--caloryCard)",
                }}
              >
                {data.data.email}
              </span>
            </div>
            <div className="name conatct">
              <span
                style={{ fontSize: "1.3rem", fontWeight: "500", color: "navy" }}
              >
                Contact
              </span>
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "400",
                  color: "var(--caloryCard)",
                }}
              >
                {data.data.phone}
              </span>
            </div>
          </div>
          <div className="right">
            <div className="name web">
              <span
                style={{ fontSize: "1.3rem", fontWeight: "500", color: "navy" }}
              >
                Website
              </span>
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "400",
                  color: "var(--appColor)",
                }}
              >
                {data.data.website}
              </span>
            </div>
            <div
              className="name address"
              style={{
                fontSize: "1.1rem",
                fontWeight: "400",
                color: "var(--appColor)",
              }}
            >
              <span
                style={{ fontSize: "1.3rem", fontWeight: "500", color: "navy" }}
              >
                Address
              </span>
              <span>{data.data.address.street}</span>
              <span>{data.data.address.suite}</span>
              <span>{data.data.address.city}</span>
              <span>{data.data.address.zipcode}</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserDetailModel;
