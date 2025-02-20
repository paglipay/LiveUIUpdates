const io = require("socket.io")(4000, {
  cors: {
    origin: "*",
  },
});

// Define the JSON structure for the webpage
const pageData = {
  "component": "react-bootstrap.Container",
  "props": {
    "children": [
      {
        "component": "react-bootstrap.Row",
        "props": {
          "children": [
            {
              "component": "react-bootstrap.Col",
              "props": {
                "xs": 12,
                "children": {
                  "component": "react-bootstrap.Jumbotron",
                  "props": {
                    "style": {
                      "backgroundColor": "#007bff",
                      "color": "white",
                      "textAlign": "center",
                      "padding": "50px 0"
                    },
                    "children": [
                      {
                        "component": "react-bootstrap.H1",
                        "props": {
                          "children": "Your Trusted IT Services Partner"
                        }
                      },
                      {
                        "component": "react-bootstrap.P",
                        "props": {
                          "children": "We offer a wide range of managed IT solutions to help businesses grow, stay secure, and be productive."
                        }
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
      },
      {
        "component": "react-bootstrap.Row",
        "props": {
          "children": [
            {
              "component": "react-bootstrap.Col",
              "props": {
                "xs": 12,
                "md": 4,
                "children": {
                  "component": "react-bootstrap.Card",
                  "props": {
                    "style": {
                      "width": "18rem"
                    },
                    "children": [
                      {
                        "component": "react-bootstrap.Card.Body",
                        "props": {
                          "children": [
                            {
                              "component": "react-bootstrap.Card.Title",
                              "props": {
                                "children": "Managed IT Support"
                              }
                            },
                            {
                              "component": "react-bootstrap.Card.Text",
                              "props": {
                                "children": "Our expert team provides 24/7 IT support, ensuring your systems are always running smoothly."
                              }
                            },
                            {
                              "component": "react-bootstrap.Button",
                              "props": {
                                "variant": "primary",
                                "size": "lg",
                                "children": "Learn More"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            },
            {
              "component": "react-bootstrap.Col",
              "props": {
                "xs": 12,
                "md": 4,
                "children": {
                  "component": "react-bootstrap.Card",
                  "props": {
                    "style": {
                      "width": "18rem"
                    },
                    "children": [
                      {
                        "component": "react-bootstrap.Card.Body",
                        "props": {
                          "children": [
                            {
                              "component": "react-bootstrap.Card.Title",
                              "props": {
                                "children": "Cybersecurity Solutions"
                              }
                            },
                            {
                              "component": "react-bootstrap.Card.Text",
                              "props": {
                                "children": "Protect your business from online threats with our cutting-edge security solutions."
                              }
                            },
                            {
                              "component": "react-bootstrap.Button",
                              "props": {
                                "variant": "primary",
                                "size": "lg",
                                "children": "Learn More"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            },
            {
              "component": "react-bootstrap.Col",
              "props": {
                "xs": 12,
                "md": 4,
                "children": {
                  "component": "react-bootstrap.Card",
                  "props": {
                    "style": {
                      "width": "18rem"
                    },
                    "children": [
                      {
                        "component": "react-bootstrap.Card.Body",
                        "props": {
                          "children": [
                            {
                              "component": "react-bootstrap.Card.Title",
                              "props": {
                                "children": "Cloud Solutions"
                              }
                            },
                            {
                              "component": "react-bootstrap.Card.Text",
                              "props": {
                                "children": "Leverage the cloud to scale your business with our customized cloud hosting and migration services."
                              }
                            },
                            {
                              "component": "react-bootstrap.Button",
                              "props": {
                                "variant": "primary",
                                "size": "lg",
                                "children": "Learn More"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            },
            {
              "component": "react-bootstrap.Col",
              "props": {
                "xs": 12,
                "md": 4,
                "children": {
                  "component": "react-bootstrap.Card",
                  "props": {
                    "style": {
                      "width": "18rem"
                    },
                    "children": [
                      {
                        "component": "react-bootstrap.Card.Body",
                        "props": {
                          "children": [
                            {
                              "component": "react-bootstrap.Card.Title",
                              "props": {
                                "children": "Cloud Backup Services"
                              }
                            },
                            {
                              "component": "react-bootstrap.Card.Text",
                              "props": {
                                "children": "Ensure your business data is safe with our secure and scalable cloud backup solutions."
                              }
                            },
                            {
                              "component": "react-bootstrap.Button",
                              "props": {
                                "variant": "primary",
                                "size": "lg",
                                "children": "Learn More"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            },
            {
              "component": "react-bootstrap.Col",
              "props": {
                "xs": 12,
                "md": 4,
                "children": {
                  "component": "react-bootstrap.Card",
                  "props": {
                    "style": {
                      "width": "18rem"
                    },
                    "children": [
                      {
                        "component": "react-bootstrap.Card.Body",
                        "props": {
                          "children": [
                            {
                              "component": "react-bootstrap.Card.Title",
                              "props": {
                                "children": "IT Consulting"
                              }
                            },
                            {
                              "component": "react-bootstrap.Card.Text",
                              "props": {
                                "children": "Optimize your business processes and IT infrastructure with our expert IT consulting services."
                              }
                            },
                            {
                              "component": "react-bootstrap.Button",
                              "props": {
                                "variant": "primary",
                                "size": "lg",
                                "children": "Learn More"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            },
            {
              "component": "react-bootstrap.Col",
              "props": {
                "xs": 12,
                "md": 4,
                "children": {
                  "component": "react-bootstrap.Card",
                  "props": {
                    "style": {
                      "width": "18rem"
                    },
                    "children": [
                      {
                        "component": "react-bootstrap.Card.Body",
                        "props": {
                          "children": [
                            {
                              "component": "react-bootstrap.Card.Title",
                              "props": {
                                "children": "Disaster Recovery Solutions"
                              }
                            },
                            {
                              "component": "react-bootstrap.Card.Text",
                              "props": {
                                "children": "Minimize downtime with our disaster recovery and business continuity planning services."
                              }
                            },
                            {
                              "component": "react-bootstrap.Button",
                              "props": {
                                "variant": "primary",
                                "size": "lg",
                                "children": "Learn More"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
      }
    ]
  }
}


// Emit page data to connected clients every second
setInterval(() => {
  io.emit("update", [pageData]); // Sending the JSON structure as pageData to the client
  console.log("Emitting page data to clients:", pageData); // Log the emitted data for debugging
}, 1000);

console.log("Server running on port 4000");
