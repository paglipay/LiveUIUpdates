import React from "react";
import { Alert, Button, Card, ProgressBar, Badge, Dropdown, Modal, Spinner, ListGroup, Form, Table, Collapse } from "react-bootstrap"; // React-Bootstrap
import { Button as AntButton, Card as AntCard, Progress as AntProgress, Badge as AntBadge, Dropdown as AntDropdown, Modal as AntModal, Tooltip as AntTooltip, Spin as AntSpin, List as AntList } from "antd"; // Ant Design
import { Button as MuiButton, Card as MuiCard, CircularProgress, Badge as MuiBadge, Menu as MuiMenu, Modal as MuiModal, Tooltip as MuiTooltip, List as MuiList } from "@mui/material"; // Material-UI

// Components map for each library
export const componentsMap = {
  "react-bootstrap": {
    Alert: ({ variant, onClose, children }) => <Alert variant={variant} dismissible onClose={onClose}>{children}</Alert>,
    Button: ({ variant, size, onClick, children }) => <Button variant={variant} size={size} onClick={onClick}>{children}</Button>,
    Card: ({ style, children }) => <Card style={style}><Card.Body>{children}</Card.Body></Card>,
    Progress: ({ now, label }) => <ProgressBar now={now} label={label} />,
    Badge: ({ variant, children }) => <Badge variant={variant}>{children}</Badge>,
    Dropdown: ({ title, items }) => (
      <Dropdown>
        <Dropdown.Toggle>{title}</Dropdown.Toggle>
        <Dropdown.Menu>{items.map((item, index) => <Dropdown.Item key={index}>{item}</Dropdown.Item>)}</Dropdown.Menu>
      </Dropdown>
    ),
    Modal: ({ show, onHide, children }) => <Modal show={show} onHide={onHide}><Modal.Body>{children}</Modal.Body></Modal>,
    Tooltip: ({ title, children }) => <div data-bs-toggle="tooltip" title={title}>{children}</div>,
    Spinner: ({ animation, variant }) => <Spinner animation={animation} variant={variant} />,
    ListGroup: ({ items }) => (
      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item key={index}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
    ),
    Form: ({ onSubmit, children }) => <Form onSubmit={onSubmit}><Form.Control value={children} /></Form>,
    Table: ({ data }) => (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}><td>{row.name}</td><td>{row.age}</td></tr>
          ))}
        </tbody>
      </Table>
    ),
    Collapse: ({ in: inProp, children }) => <Collapse in={inProp}><div>{children}</div></Collapse>,
  },

  "ant-design": {
    Button: ({ variant, size, onClick, children }) => <AntButton type={variant} size={size} onClick={onClick}>{children}</AntButton>,
    Card: ({ title, style, children }) => <AntCard title={title} style={style}>{children}</AntCard>,
    Progress: ({ now, label }) => <AntProgress percent={now} format={() => label} />,
    Badge: ({ children }) => <AntBadge count={children} />,
    Modal: ({ show, onHide, children }) => <AntModal visible={show} onCancel={onHide}>{children}</AntModal>,
    Tooltip: ({ title, children }) => <AntTooltip title={title}>{children}</AntTooltip>,
    Spinner: ({ size }) => <AntSpin size={size} />,
    ListGroup: ({ items }) => <AntList>{items.map((item, index) => <AntList.Item key={index}>{item}</AntList.Item>)}</AntList>,
  },

  "material-ui": {
    Button: ({ variant, color, onClick, children }) => <MuiButton variant={variant} color={color} onClick={onClick}>{children}</MuiButton>,
    Card: ({ style, children }) => <MuiCard sx={style}>{children}</MuiCard>,
    CircularProgress: () => <CircularProgress />,
    Badge: ({ children, variant }) => <MuiBadge badgeContent={children} color={variant} />,
    Modal: ({ show, onHide, children }) => <MuiModal open={show} onClose={onHide}>{children}</MuiModal>,
    Tooltip: ({ title, children }) => <MuiTooltip title={title}>{children}</MuiTooltip>,
    List: ({ items }) => <MuiList>{items.map((item, index) => <li key={index}>{item}</li>)}</MuiList>,
  }
};
