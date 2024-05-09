import React from "react";
import {
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  ActionIcon,
  Container,
  Title,
  Button,
  Flex,
  Divider,
} from "@mantine/core";
import classes from "./list-blog.module.css";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Foundation",
    author: "Isaac Asimov",
    published: 1951,
    reviews: { upvote: 2223, downVote: 259 },
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    published: 1818,
    reviews: { upvote: 5677, downVote: 1265 },
  },
  {
    title: "Solaris",
    author: "Stanislaw Lem",
    published: 1961,
    reviews: { upvote: 3487, downVote: 1845 },
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    published: 1965,
    reviews: { upvote: 8576, downVote: 663 },
  },
  {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    published: 1969,
    reviews: { upvote: 6631, downVote: 993 },
  },
  {
    title: "A Scanner Darkly",
    author: "Philip K Dick",
    published: 1977,
    reviews: { upvote: 8124, downVote: 1847 },
  },
];

const ListBlog = () => {
  const rows = data.map((row) => {
    return <TableRows row={row} />;
  });

  return (
    <Container fluid>
      <Flex align={"center"} justify="space-between">
        <Title>All Blogs</Title>
        <Button component={Link} to="/dashboard/create">
          Create New
        </Button>
      </Flex>
      <Divider mt={"xs"} mb={"lg"} />
      <Table.ScrollContainer w={"100%"} styles={{ minWidth: "100%" }}>
        <Table verticalSpacing="xs">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Blog title</Table.Th>
              <Table.Th>Published</Table.Th>
              <Table.Th>Creator</Table.Th>
              <Table.Th>Reviews</Table.Th>
              <Table.Th>Reviews distribution</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Container>
  );
};

const TableRows = ({ row }) => {
  const totalReviews = row.reviews.downVote + row.reviews.upvote;
  const upVoteReviews = (row.reviews.upvote / totalReviews) * 100;
  const downVoteReviews = (row.reviews.downVote / totalReviews) * 100;
  return (
    <Table.Tr key={row.title}>
      <Table.Td>
        <Anchor component="button" fz="sm">
          {row.title}
        </Anchor>
      </Table.Td>
      <Table.Td>{row.published}</Table.Td>
      <Table.Td>
        <Anchor component="button" fz="sm">
          {row.author}
        </Anchor>
      </Table.Td>
      <Table.Td>{Intl.NumberFormat().format(totalReviews)}</Table.Td>
      <Table.Td>
        <Group justify="space-between">
          <Text fz="xs" c="teal" fw={700}>
            {upVoteReviews.toFixed(0)}%
          </Text>
          <Text fz="xs" c="red" fw={700}>
            {downVoteReviews.toFixed(0)}%
          </Text>
        </Group>
        <Progress.Root>
          <Progress.Section
            className={classes.progressSection}
            value={upVoteReviews}
            color="teal"
          />

          <Progress.Section
            className={classes.progressSection}
            value={downVoteReviews}
            color="red"
          />
        </Progress.Root>
      </Table.Td>
      <Table.Td>
        <Group gap={2}>
          <ActionIcon color="red" variant="subtle">
            <IconTrash />
          </ActionIcon>
          <ActionIcon variant="subtle">
            <IconEye />
          </ActionIcon>
          <ActionIcon variant="subtle">
            <IconEdit />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  );
};

export default ListBlog;
