import React, { useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BloggersPage() {
    // Sample data for demonstration
    const [bloggers, setBloggers] = useState([
        { id: 1, name: 'John Doe', blogName: 'Blog 1', status: 'Published', publishDate: '2024-05-10' },
        { id: 2, name: 'Jane Smith', blogName: 'Blog 2', status: 'Draft', publishDate: '2024-05-12' },
        { id: 3, name: 'Alice Johnson', blogName: 'Blog 3', status: 'Published', publishDate: '2024-05-15' }
    ]);

    function handleEdit(id) {
        console.log(`Edit blogger with id: ${id}`);
        // Add logic for editing a blogger here
    }

    function handleDelete(id) {
        setBloggers(bloggers.filter(blogger => blogger.id !== id));
    }

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Bloggers</h1>
            <Table striped bordered hover>
                <thead className="thead-dark">
                    <tr>
                        <th>Blog Name</th>
                        <th>Published By</th>
                        <th>Status</th>
                        <th>Publish Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bloggers.map((blogger) => (
                        <tr key={blogger.id}>
                            <td>{blogger.blogName}</td>
                            <td>{blogger.name}</td>
                            <td>{blogger.status}</td>
                            <td>{blogger.publishDate}</td>
                            <td>
                                <Button variant="primary" size="sm" className="mr-2" onClick={() => handleEdit(blogger.id)}>Edit</Button>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(blogger.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default BloggersPage;