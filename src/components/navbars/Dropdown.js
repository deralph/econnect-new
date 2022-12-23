import React from "react";

import { Dropdown } from "rsuite";

const Dropdowns = () => {
  return (
    <Dropdown title="account" trigger={["click", "hover"]}>
      <Dropdown.Item>Login</Dropdown.Item>
      <Dropdown.Item>Register</Dropdown.Item>
    </Dropdown>
  );
};

export default Dropdowns;
