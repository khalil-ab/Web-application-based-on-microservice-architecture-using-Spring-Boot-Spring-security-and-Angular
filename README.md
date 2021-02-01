Here is an application (backend + frontend) reserved for beginners wishing to work with Angular and Spring Boot using the microservice architecture and spring security 

This application allows you to manage products each belonging to a category knowing that a category contains several products.

To do this the application will be composed of two micro services:

- A microservice that allows you to manage products and categories. The data are stored in a database of type MongoDB. Access to this micro service requires authorization. The user with the ADMIN role can manage products and categories and the user with the USER role can manage products only.

- A Microservice that takes care of centralizing the authentication and authorization management operation using Json Web Token (JWT). In this microservice users and roles are stored in a MySQL-type database.

<p align="center">
  <img src="/0.png">
</p>
<p align="center">
  <img src="/1.png">
</p>
<p align="center">
  <img src="/2.png">
</p>
<p align="center">
  <img src="/3.png">
</p>

Here is my email if anyone would like to contact me : abouabdelmajidkhalil@gmail.com

