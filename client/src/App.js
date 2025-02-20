import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Alert,
  ListGroup,
} from "react-bootstrap";

// Establish Socket connection
const socket = io("http://localhost:4000");

const DynamicComponent = ({ component, props }) => {
  const [library, componentType] = component.split(".");

  if (isBasicHTMLElement(componentType)) {
    return React.createElement(componentType, props, props.children);
  }

  switch (library) {
    case "react-bootstrap":
      return renderBootstrapComponent(componentType, props);
    case "material-ui":
      // Add logic for material-ui if needed
      return <div>Material UI component here</div>;
    default:
      return <div>Unknown component library</div>;
  }
};

const renderBootstrapComponent = (componentType, props) => {
  const { children, ...restProps } = props;

  switch (componentType) {
    case "Container":
      return (
        <Container {...restProps}>
          {Array.isArray(children)
            ? children.map((child, index) => (
                <RenderChildComponent
                  key={index}
                  component={child.component}
                  props={child.props}
                />
              ))
            : typeof children === 'string' ? children : children && (
                <RenderChildComponent
                  component={children.component}
                  props={children.props}
                />
              )}
        </Container>
      );
    case "Row":
      return (
        <Row {...restProps}>
          {Array.isArray(children)
            ? children.map((child, index) => (
                <RenderChildComponent
                  key={index}
                  component={child.component}
                  props={child.props}
                />
              ))
            : typeof children === 'string' ? children : children && (
                <RenderChildComponent
                  component={children.component}
                  props={children.props}
                />
              )}
        </Row>
      );
    case "Col":
      return (
        <Col {...restProps}>
          {Array.isArray(children)
            ? children.map((child, index) => (
                <RenderChildComponent
                  key={index}
                  component={child.component}
                  props={child.props}
                />
              ))
            : typeof children === 'string' ? children : children && (
                <RenderChildComponent
                  component={children.component}
                  props={children.props}
                />
              )}
        </Col>
      );
    case "Jumbotron":
      return (
        <Container
          {...restProps}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            textAlign: "center",
            padding: "50px 0",
          }}
        >
          {Array.isArray(children)
            ? children.map((child, index) => (
                <RenderChildComponent
                  key={index}
                  component={child.component}
                  props={child.props}
                />
              ))
            : typeof children === 'string' ? children : children && (
                <RenderChildComponent
                  component={children.component}
                  props={children.props}
                />
              )}
        </Container>
      );
    case "Card":
      return (
        <Card style={restProps.style}>
          <Card.Body>
            <Card.Title>{restProps.title}</Card.Title>
            {Array.isArray(children)
              ? children.map((child, index) => (
                  <RenderChildComponent
                    key={index}
                    component={child.component}
                    props={child.props}
                  />
                ))
              : typeof children === 'string' ? children : children && (
                  <RenderChildComponent
                    component={children.component}
                    props={children.props}
                  />
                )}
          </Card.Body>
        </Card>
      );
    case "Card.Body":
      return (
        <Card.Body {...restProps}>
          {Array.isArray(children)
            ? children.map((child, index) => (
                <RenderChildComponent
                  key={index}
                  component={child.component}
                  props={child.props}
                />
              ))
            : typeof children === 'string' ? children : children && (
                <RenderChildComponent
                  component={children.component}
                  props={children.props}
                />
              )}
        </Card.Body>
      );
    case "Card.Title":
      return <Card.Title {...restProps}>{restProps.children}</Card.Title>;
    case "Card.Text":
      return <Card.Text {...restProps}>{restProps.children}</Card.Text>;
    case "Button":
      return <Button {...restProps}>{restProps.children}</Button>;
    case "Alert":
      return <Alert {...restProps}>{restProps.children}</Alert>;
    case "ListGroup":
      return (
        <ListGroup>
          {restProps.items &&
            restProps.items.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
        </ListGroup>
      );
    default:
      return <div>Unknown component type</div>;
  }
};

// Render child components recursively
const RenderChildComponent = ({ component, props }) => {
  if (!component || !props) {
    return null;
  }

  const [library, componentType] = component.split(".");

  if (isBasicHTMLElement(componentType)) {
    return React.createElement(componentType, props, props.children);
  }

  switch (library) {
    case "react-bootstrap":
      return renderBootstrapComponent(componentType, props);
    default:
      return <div>Unknown child component</div>;
  }
};

// Check if the component type is a basic HTML element
const isBasicHTMLElement = (componentType) => {
  const basicHTMLElements = [
    "div",
    "span",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ul",
    "ol",
    "li",
    "a",
    "img",
    "p",
    "button",
    "input",
    "textarea",
    "form",
    "label",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "header",
    "footer",
    "section",
    "article",
    "nav",
    "aside",
    "main",
    "figure",
    "figcaption",
    "blockquote",
    "pre",
    "code",
    "em",
    "strong",
    "small",
    "sub",
    "sup",
    "i",
    "b",
    "u",
    "mark",
    "del",
    "ins",
    "s",
    "q",
    "cite",
    "abbr",
    "address",
    "time",
    "progress",
    "meter",
    "audio",
    "video",
    "canvas",
    "svg",
    "path",
    "circle",
    "rect",
    "line",
    "polyline",
    "polygon",
    "text",
    "g",
    "defs",
    "symbol",
    "use",
    "clipPath",
    "filter",
    "feGaussianBlur",
    "feOffset",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feImage",
    "feMerge",
    "feMorphology",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
  ];
  return basicHTMLElements.includes(componentType.toLowerCase());
};

const App = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    socket.on("update", (data) => {
      console.log("Received update from server:", data);
      setComponents(data); // Set data directly as the array structure is correct
    });

    return () => {
      socket.off("update");
    };
  }, []);

  return (
    <div>
      <h1>App2</h1>
      {components.map((componentData, index) => (
        <DynamicComponent
          key={index}
          component={componentData.component}
          props={componentData.props}
        />
      ))}
    </div>
  );
};

export default App;
