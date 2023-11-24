# FORMTEAM

FORMTEAM is an AngularJS application that allows users to view a list of mock users in card format with pagination (20 users per page). The application provides various functionalities such as searching by name, applying filters for domain, gender, and availability simultaneously, and creating a team by selecting users from unique domains.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

Project Deyloment Link:-https://sensational-flan-e9db0f.netlify.app/




## Functionalities

# 1. Search by Name
Users can search for specific individuals by entering their names in the provided search input. The search is case-insensitive and updates the displayed user cards in real-time.

# 2. Filters
Three filters are available to refine the displayed user cards:

Domain Filter: Users can filter by domain, selecting from a list of unique domains.
Gender Filter: Users can filter by gender, choosing from options such as Male, Female, or Agender.
Availability Filter: Users can filter by availability, choosing from options such as Available or Not Available.
These filters can be used simultaneously to narrow down the displayed user cards based on specific criteria.

# 3. Create a Team
Users can create a team by selecting users from a unique domain. Only available users from the selected domain are added to the team. Once a user from a particular domain is added to the team, no other user from the same domain can be added to the team.

# 4. Team Details
After creating a team, users can view the details of the selected team members. The team details include the names of team members and the total number of team members.

# 5. Pagination
User cards are displayed with pagination, showing 20 users per page. Users can navigate through pages using the "Prev" and "Next" buttons.

# Responsive Design
FORMTEAM is designed to be responsive, ensuring a seamless user experience across various devices, including desktops, tablets, and mobile phones.

## Tech Stack
AngularJS


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
