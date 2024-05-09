import React from "react";
import { Form, useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import {
  Button,
  Container,
  Group,
  Stack,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";

const createBlogScheme = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(3, "Title must be greater than 3 letter"),
  content: z
    .string({ required_error: "Content is required" })
    .min(3, "Content must be greater than 3 letter"),
});

const CreateBlog = () => {
  const form = useForm({
    validate: zodResolver(createBlogScheme),
    initialValues: {
      title: "",
      consten: "",
      imageUrl: "",
    },
  });

  const onSubmit = form?.onSubmit((data) => {
    console.log(data);
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Container>
          <Title>Create New Blog Post</Title>
          <Stack mt={"xl"}>
            <TextInput
              required
              label="Title"
              placeholder="Input Ttitle"
              {...form.getInputProps("title")}
            />
            <Textarea
              required
              label="Content"
              placeholder="Input Content"
              cols={30}
              rows={20}
              {...form.getInputProps("content")}
            />{" "}
            <Group>
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Group>
          </Stack>
        </Container>
      </form>
    </div>
  );
};

export default CreateBlog;
