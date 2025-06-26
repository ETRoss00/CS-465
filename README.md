# CS-465

# Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

In the early stages of development, I used Express HTML and JavaScript to build static and server rendered pages that required separate requests to load each view. 
From there, I transitioned to Angular for the SPA portion which allowed dynamic routing, real-time updates, and more fluid interactions without reloading the entire page. The SPA offered better scalability and user experience by loading only necessary components and data.

# Why did the backend use a NoSQL MongoDB database?

The backend used MongoDB because it supports flexible schema design which makies it ideal for evolving data structures like travel packages. Using Mongoose, I could define clear models for trips and users, and MongoDB's document-oriented storage made integration with JSON-based RESTful APIs seamless.

# How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?

JSON (JavaScript Object Notation) is a data interchange format while JavaScript is a programming language. JSON was used to send and receive structured data between the Angular frontend and the Node/Express backend. It acted as the bridge for transferring trip details, user credentials, and other information between the client and server.

# Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

I refactored form components like the Trip Add/Edit screens in Angular into reusable components to avoid duplication. This helped maintain consistency across the views and simplified the updates. For example, the same trip form logic could be reused for both creation and editing. Doing so reduces potential bugs and development time.

# Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

I tested the API endpoints using Postman to verify GET, POST, PUT, and DELETE functionality. When authentication was added, I included token-based headers to simulate secure access to protected routes. This made sure that only logged in users could make changes which aligns with best practices for full stack application security.

# How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

While I would say I don't have anything mastered yet, it did help me develop using the MEAN stack and reinforced the importance of modular, testable code. I also strengthened my understanding of API development, data modeling, and single-page app architecture. Learning these skills with hands on experience building and securing a full stack app have made me a more confident and competitive software engineering candidate.
