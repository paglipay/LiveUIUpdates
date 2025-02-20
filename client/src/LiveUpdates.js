import React, { useState, useEffect } from "react";
import io from "socket.io-client"; // Import socket.io-client
import { componentsMap } from "./componentsMap"; // import componentsMap

const LiveUpdates = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    // Connect to the server using Socket.IO
    const socket = io("http://localhost:4000");

    // Listen for the "pageData" event from the server
    socket.on("pageData", (data) => {
      console.log("Received data:", data); // Log the received data for debugging
      // Handle the received data and update components
      setComponents(data.props.children); // Assuming the pageData structure
    });

    // Clean up the connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      {components.map((component, index) => {
        const { component: componentName, props } = component;

        // Dynamically get the component based on its name
        const Component = componentsMap[componentName];

        if (Component) {
          return <Component key={index} {...props} />;
        }

        return null; // Return null if no component found
      })}
    </div>
  );
};

export default LiveUpdates;
