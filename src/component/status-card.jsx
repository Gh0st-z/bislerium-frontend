import { Card, Progress, Text } from "@mantine/core";
import React from "react";
import classes from "./status-card.module.css";

const StatusCard = ({ title, value, progressValue }) => {
  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Text fz="xs" tt="uppercase" fw={700} className={classes.title}>
        {title}
      </Text>
      <Text fz="lg" fw={500} className={classes.stats}>
        {value}
      </Text>
      <Progress
        value={progressValue}
        mt="md"
        size="lg"
        radius="xl"
        classNames={{
          root: classes.progressTrack,
          section: classes.progressSection,
        }}
      />
    </Card>
  );
};

export default StatusCard;
