
# ELDEN RING

# 

"Elden Ring" - Is a recreation of the video game elden ring messaging system, The user can make messages and save them in case they want to recreate the message in the game, they can refer back to it.

# A live build can be found [here](https://elden-ring-e8545a34e7a5.herokuapp.com/).

## Tools

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

#### Maintained
![maintaned](https://img.shields.io/badge/Maintained%3F-yes-green.svg)

## Elden Ring

"Elden Ring" is an innovative web application designed to bring video game enthusiasts together through a unique blend of message creation, Here's an overview of the key features:

1. **User Authentication:**
   - Seamless sign-up and login process, providing users with personalized access to the application.
   - Secure authentication ensures a private and tailored experience for each user.

2. **Message Creation:**
   - Pick templates and words to create your message.
   - View your created messages.







Create message page.

![Gotei13 Wireframe](/public/images/elden-ring-message.png)

Created messages.

![Gotei13 Wireframe](/public/images/er-messages.png)


## Features
- User-Friendly Front-End Interface
- Interactive Message Creation
- Visually Engaging Elements
- Usesd Tailwind CSS
- Background Images
- User Authentication 

## Technologies used

"In the development of the Elden Ring application, a modern and efficient stack of technologies was employed to deliver an immersive user experience. React.js, a powerful JavaScript library, took center stage, providing a dynamic and responsive front-end for seamless user interactions. JavaScript served as the scripting language, adding interactivity and dynamism to the application and enhancing overall user engagement.

Express.js, a minimal and flexible Node.js framework, formed the backbone of the server-side development, facilitating smooth data flow and enabling robust functionality behind the scenes. MongoDB, a NoSQL database, was chosen for its efficiency in managing and storing user data and Message information. Mongoose, a schema-based solution, streamlined data modeling for increased efficiency.

For the user interface, HTML was utilized to structure the web content, while CSS and Tailwind CSS were employed for styling, ensuring a visually appealing and responsive design. Tailwind CSS, in particular, provided a utility-first approach for crafting modern and efficient styles.

JWT (JSON Web Token) tokens were implemented for secure user authentication, enhancing the overall security and reliability of user registration and login processes.

NPM (Node Package Manager) played a pivotal role in the development process, seamlessly integrating various packages, libraries, and dependencies. Git, a version control system, was utilized for collaborative development, allowing for efficient code management and collaboration.


## Challenges

The development of the Elden Ring application came with several challenges, including:

- **User Authentication**: Establishing secure user authentication using JWT tokens in the Malevolent Shrine project demanded meticulous planning and attention to detail. The goal was to safeguard user data and restrict access to authorized users only.

- **Data Management**: Effectively managing anime character data in MongoDB posed challenges related to data validation, schema design, and storage. Adapting to the flexibility of a NoSQL database presented a learning curve while ensuring data consistency and integrity.

- **Front-End Complexity**: Designing an appealing and user-friendly front-end for Malevolent Shrine involved addressing challenges related to responsive design, layout, and interactive elements. 

- **Error Handling**: Implementing robust error handling mechanisms to deliver meaningful feedback to users in case of issues was a critical aspect. Handling diverse types of errors and presenting them in a user-friendly manner demanded careful planning.

- **User Experience**: Balancing feature richness with a smooth and intuitive user experience was an ongoing challenge in the Malevolent Shrine project. Striking the right equilibrium between functionality and usability required continuous user feedback and iterative design enhancements.

Despite these challenges, the development of the Elden Ring application proved to be a gratifying experience, resulting in a platform that empowers users to create Messages in an engaging and interactive environment.

## Favorite Function
- The `createMessage` function is an asynchronous handler for requests to the "/api/messages" endpoint. It begins by logging the received request data, including the timestamp and request body content. The function extracts essential fields such as `template`, `words`, `conjunctions`, `additionalTemplate`, and `additionalWords` from the request body, ensuring their presence for a valid request. If any required fields are missing, the function responds with a 400 Bad Request status, accompanied by a JSON object indicating the necessity of all required fields.

Assuming the required fields are provided, the function creates a new message instance with the extracted data and attempts to save it to the database using asynchronous operations. A successful save operation results in a 201 Created status, and the response includes a JSON object containing details about the saved message. In cases of validation errors during creation or saving, the function catches them, checks for a 'ValidationError' name, and responds with a 400 Bad Request status, providing details about the validation error. For other errors, the function catches and responds with a 500 Internal Server Error status, advising clients to try the request again later. This structured approach ensures proper handling of request data and robust error management during the message creation process.



```js

const createMessage = async (req, res) => {
  try {
    // Log the received request data
    console.log(`[${new Date()}] Received request to /api/messages:`, req.body);

    // Ensure all required fields are present
    const { template, words, conjunctions, additionalTemplate, additionalWords } = req.body;

    if (!template || !additionalTemplate || !additionalWords) {
      return res.status(400).json({ error: 'Invalid request data. Please provide all required fields.' });
    }

    // Create a new message
    const newMessage = new Message({
      template,
      words,
      conjunctions,
      additionalTemplate,
      additionalWords,
    });

    // Save the message to the database
    const savedMessage = await newMessage.save();

    // Respond with the saved message
    res.status(201).json(savedMessage);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: 'Validation Error', details: error.errors });
    }

    res.status(500).json({ error: 'Internal Server Error. Please try again later.' });
  }
};
```


```

## Future
- [ ] Mobile support
- [ ] Adding the functionality so that the users can up or downvote messages
- [ ] Adding the functionality so that the users can delete their messages 
- [ ] Expand on the overall design
- [ ] Refactor code 


