# LEGACY LEARN: Empowering Students, Streamlining Education

Project Name: Legacy Learn
Project Code: https://github.com/Tonyrealzy/Legacy-Learning-App

![Screenshot of Legacy Learn Landing page](./images/FOR%20SLIDES.jpg)

![Screenshot of Legacy Learn Login page](./images/FOR%20SLIDES2.png)


## Introduction:
Imagine a learning platform designed to bridge the gap between students and administrators. Legacy Learn, built collaboratively, empowers students with essential tools for organization and progress tracking, while fostering clear communication with instructors.

### Inspiration:
This project stemmed from a desire to address common pain points in the educational landscape. Students often juggle disorganized notes and unclear communication channels, hindering their learning experience. Legacy Learn tackles these challenges with a user-friendly platform that streamlines communication and aids academic organization.

### Building Legacy Learn (11 Days):
Legacy Learn wouldn't have been possible without the collaborative spirit of our team. We opted for a feature-driven approach, prioritizing core functionalities within an impressive 11-day development timeframe.

## Technical Choices:
Frontend (HTML, CSS, Angular): We prioritized a user-friendly interface with a focus on core web development concepts. This approach allowed for flexibility and a visually appealing design without the overhead of a more complex framework.
Backend (Spring Boot, MySQL): Spring Boot's efficient development cycle and seamless integration with MySQL (a powerful relational database) facilitated rapid application development and secure data management.

## Key Features:
#### Secure User Authentication (Spring Security): 
Protects sensitive student information and ensures only authorized users access the application.
#### Role-Based Access Control: 
Tailored functionalities for students and administrators. Students can track progress and submit feedback, while administrators manage student information and send announcements.
#### Responsive Design: 
Adapts seamlessly to various screen sizes, ensuring a smooth user experience on all devices.
#### Interactive Feedback Mechanism: 
Students can actively participate in the learning process by providing valuable feedback on courses, instructors, and the overall experience.
#### Streamlined Communication: 
A two-way notification system keeps everyone informed about important updates and deadlines.
#### CGPA Calculator and Performance Tracking: 
Empowers students to take charge of their academic journey. The CGPA calculator eliminates manual calculations, and performance tracking functionalities allow students to monitor progress and identify areas for improvement.

### Learnings and the Road Ahead:
This project was a valuable learning experience, fostering skills in Spring Security, overcoming challenges like CORS (Cross-Origin Resource Sharing), and emphasizing the importance of clean and maintainable code. Looking ahead, the passion for back-end development ignited by Legacy Learn motivates a deeper exploration of front-end frameworks and user experience design for future educational technology projects.

## AUTHORS:
#### Umehobi Arinze 
- LinkedIn: https://www.linkedin.com/in/arinzeumehobi
- Github: https://github.com/Tonyrealzy
- Twitter: https://twitter.com/Tonyrealzy
#### Ighawosa Omoma 
- LinkedIn: https://www.linkedin.com/in/ighawosa-omoma-5070a721b
- Github: https://github.com/Ig-matrix
- Twitter: https://twitter.com/i_am_ig_matrix

#### Blog-post: 
https://www.linkedin.com/posts/arinzeumehobi_github-tonyrealzylegacy-learning-app-activity-7175592005345951744-B8FK?utm_source=share&utm_medium=member_desktop

## INSTALLATION:
Legacy Learn is a Java web application built with Spring Boot on the backend and Angular on the frontend. To run the application locally, you'll need the following:

#### Prerequisites:
1. Java Development Kit (JDK) 11 or above (https://www.oracle.com/java/technologies/downloads/)
2. Maven build tool (https://maven.apache.org/download.cgi)
3. A code editor or IDE with support for Spring Boot and Angular development (e.g., IntelliJ IDEA, Visual Studio Code)

#### Steps:
1. Clone the Legacy Learn repository:
git clone https://github.com/Tonyrealzy/Legacy-Learning-App.git
2. Navigate to the project directory:
cd Legacy-Learning-App
3. Install project dependencies:
mvn clean install
4. Configure Database Connection:
Legacy Learn utilizes a MySQL database for data storage. If you plan to use the application with persistence, you'll need to configure the connection details in the application.properties file located in the project's src/main/resources directory.
5. Run the application:
mvn spring-boot:run

### Additional Notes:
The application will run on port 8080 by default. You can access it in your web browser at http://localhost:8080/.
Angular-specific development tools and extensions for your chosen IDE might be necessary for a more streamlined frontend development experience.
Please note: This is a general guideline, and you might need to adjust these steps depending on your specific development environment.

### USAGE
Here's a breakdown of Legacy Learn's functionalities from a user's perspective.
#### For Students:
1. Login and create a secure profile.
2. Access announcements.
3. Track their academic progress using the CGPA calculator.
4. Monitor performance through features like assignment trackers and feedback mechanisms.
5. Submit feedback on courses, instructors, and the overall learning experience.
6. Receive important updates and deadlines through the notification system.

#### For Administrators:
1. Manage student information and creation of admin accounts.
2. Broadcast announcements and updates to students.
3. Analyze student performance and feedback for continuous improvement.

### RELATED PROJECTS
Here are some educational technology projects that address similar issues or might be complementary to Legacy Learn:
1. Moodle: A popular open-source learning management system offering course materials, communication tools, and assessment features.
2. Canvas: Another learning management system with features for online courses, assignments, discussions, and collaboration.
3. Socrative: A platform for creating interactive quizzes and assessments.
4. Khan Academy: A non-profit organization offering free online courses and learning materials.
These projects, while similar, might have different strengths or target specific educational needs. Legacy Learn complements them by focusing on streamlining communication, student organization tools and a focus on user experience.


## Contributing
We welcome contributions from the community!

**Bug Reporting:**
If you encounter a bug, please create an issue on the project's GitHub repository. Please provide a clear description of the bug, including steps to reproduce it if possible.

**Feature Requests:**
If you have a suggestion for a new feature, please create an issue on the GitHub repository. Be sure to detail the functionality you'd like to see and how it would benefit the project.

**Pull Requests:**
We encourage pull requests for bug fixes and new features. Please follow these guidelines when submitting a pull request:
* Fork the repository and clone it to your local machine.
* Make your changes in a separate branch.
* Ensure your code adheres to the project's coding style conventions (if any).
* Write unit tests for any new functionality you introduce.
* Push your changes to your fork and create a pull request from your branch to the main branch of the upstream repository.

Thank you for your interest in contributing to Legacy Learn!

## Licensing
This project is licensed under the terms of the GNU General Public License v3.0. See the LICENSE file for details.
