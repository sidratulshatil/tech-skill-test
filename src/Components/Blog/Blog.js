import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the purpuse of react router?</Accordion.Header>
                    <Accordion.Body>
                        A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform. The following illustration shows how react router’s dynamic routing works as compared to traditional static routing

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does context api work?</Accordion.Header>
                    <Accordion.Body>
                        To get started with the context API you have to create a context first. Then you can provide it to other components and then use it.

                        The Main 3 Approaches when adding the context API to your app is as Follows.<br />

                        1. Create a context using createContext.<br />

                        2. Wrap the React components using the created context.<br />

                        3. Consume the created context inside components using useContext.<br />


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Define About "<strong>UseRef</strong>" hook in react.js</Accordion.Header>
                    <Accordion.Body>
                        React's useRef hook, short for reference, allows us to persist data across renders without causing the component to rerender.

                        A typical use case for this hook would be to store a DOM element, which we can use to access it programmatically. You can also use it to keep a reference to the previous state of a component.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;