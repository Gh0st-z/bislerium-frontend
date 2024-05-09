import React, { useState } from "react";
import {
  Box,
  Code,
  Container,
  Flex,
  Group,
  ScrollArea,
  Text,
} from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconList,
  IconDashboard,
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconDashboard },
  { link: "/dashboard/list", label: "List Blogs", icon: IconList },
];

const DashboardLayout = () => {
  const [active, setActive] = useState("Dashboard");

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      key={item.label}
      to={item.link}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Box>
      <Flex gap={"sm"} justify={"start"}>
        <nav className={classes.navbar}>
          <div className={classes.navbarMain}>
            <Group className={classes.header} justify="space-between">
              <Text>Blogger</Text>
              <Code fw={700}>v3.1.2</Code>
            </Group>
            {links}
          </div>

          <div className={classes.footer}>
            <a
              href="#"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
              <span>Change account</span>
            </a>

            <a
              href="#"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              <span>Logout</span>
            </a>
          </div>
        </nav>
        <ScrollArea
          h={"100vh"}
          py={"lg"}
          className={classes.mainContainer}
          style={{ flexGrow: 1 }}
        >
          <Outlet />
        </ScrollArea>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
