# Backend For Frontend Project with Hexagonal Architecture in TypeScript and Node.js

This project implements a hexagonal architecture and adheres to best practices for creating a Backend For Frontend (BFF) that consumes the GitHub API. Below is a detailed documentation of the project.

![Alt text](/assets/banner.png)

## Project Structure

The project structure is organized in layers following the hexagonal architecture pattern. It can be initiated in two ways: by using Docker or by executing the commands `npm install`, `npm run build`, and `npm start` at the project root.

```bash
# Start with Docker
docker-compose up

# Or

# Install dependencies and run
npm install
npm run build
npm start
```

## Use Cases in the Application Layer

Use cases reside in the application layer and are represented by the `GithubUseCase` class. They orchestrate business logic and utilize the repository interface to fetch GitHub repositories.

```typescript
import { GithubRepositoryInterface } from "../domain/interfaces/repository";
import { GithubRepositoryEntity } from "../domain/entities/repository";

export class GithubUseCase {
  constructor(private githubRepository: GithubRepositoryInterface) {}

  static create(githubRepository: GithubRepositoryInterface): GithubUseCase {
    return new GithubUseCase(githubRepository);
  }

  async getRepositories(
    username: string,
    page?: number,
    per_page?: number,
    mostPopularFirst?: boolean
  ): Promise<GithubRepositoryEntity[] | Error> {
    // Parameter validations
    // ...

    return this.githubRepository.getRepositories(
      username,
      page,
      per_page,
      mostPopularFirst
    );
  }
}
```

## Interfaces in the Domain Layer

Interfaces in the domain layer define contracts for repositories and entities used in the system.

```typescript
import { GithubRepositoryEntity } from "../entities/repository";

export interface GithubRepositoryInterface {
  getRepositories(
    username: string,
    page?: number,
    per_page?: number,
    mostPopularFirst?: boolean
  ): Promise<GithubRepositoryEntity[] | Error>;
}
```

## Data Source: Calling the GitHub API

The `DataSourceRepository` class implements the repository interface and uses Axios to make calls to the GitHub API.

```typescript
import { GithubRepositoryInterface } from "../../domain/interfaces/repository";
import { GithubRepositoryEntity } from "../../domain/entities/repository";
import axios from "axios";

export class DataSourceRepository implements GithubRepositoryInterface {
  async getRepositories(
    username: string,
    page?: number,
    per_page?: number,
    mostPopularFirst?: boolean
  ): Promise<GithubRepositoryEntity[] | Error> {
    // GitHub API call
    // ...

    return repositories;
  }
}
```

## Best Practices and Considerations

- **Optional Parameters in GraphQL Query:** Optional parameters in the GraphQL query have been implemented to allow customization of the requested information.

- **Flexibility in Data Source:** The repository implementation using an interface allows for easily changing the data source, for example, migrating to another API or database, without impacting the application logic.

- **Decoupling of External Dependencies:** Utilizing the repository interface facilitates the decoupling of external dependencies, such as the GitHub API, enabling easy substitution in the future.

- **Adaptability to Changes:** The hexagonal architecture allows for easy adaptability to changes in application, domain, or infrastructure layers without affecting other parts of the system.

## Conclusion

This project adheres to best practices in hexagonal architecture, promoting flexibility and adaptability. The separation of layers and the use of interfaces provide a solid foundation for future changes in the data source or implementation of use cases without compromising the integrity of the system. Clear documentation and modular structure facilitate maintainability and scalability of the project.

References
Backend For Frontend Pattern: Why You Need to Know It
https://medium.com/mobilepeople/backend-for-frontend-pattern-why-you-need-to-know-it-46f94ce420b0

GitHub REST API Documentation
https://docs.github.com/en/rest/users?apiVersion=2022-11-28

Hexagonal Architecture
https://fideloper.com/hexagonal-architecture

# Other points of the technical test.

# Code Naming

```javascript
// Original Code
function calculateResult(x, y, z) {
  let sumXY = x + y;
  let productSumYZ = sumXY * z;
  let sineProduct = Math.sin(productSumYZ);
  return sineProduct;
}

// Improved Code
function calculateSineProduct(x, y, z) {
  let sumOfXY = x + y;
  let productOfSumYZ = sumOfXY * z;
  let sineProduct = Math.sin(productOfSumYZ);
  return sineProduct;
}
```

# Logical Thinking

```javascript
// Original Code
function getOddNumbers(upToNumber) {
  // Check if the provided number is positive and an integer
  if (upToNumber <= 0 || upToNumber % 1 !== 0) {
    return "Please provide a positive integer.";
  }

  // Create an array to store odd numbers
  let oddNumbers = [];

  // Iterate from 1 to the provided number, incrementing by 2
  for (let i = 1; i <= upToNumber; i += 2) {
    oddNumbers.push(i);
  }

  return oddNumbers;
}

// Improved Code
function getOddIntegers(upToNumber) {
  if (upToNumber < 1 || !Number.isInteger(upToNumber)) {
    return "Please provide a positive integer.";
  }

  let oddIntegers = [];

  for (let i = 1; i <= upToNumber; i += 2) {
    oddIntegers.push(i);
  }

  return oddIntegers;
}

// Example usage with the number 9
const result = getOddIntegers(9);
console.log(result); // Should print [1, 3, 5, 7, 9]
```

# E-commerce Backend Architecture

I would opt for using Go (Golang) for the backend of the application. Go is efficient and scalable, which can be beneficial for an e-commerce system with potential traffic peaks.

## Framework:

For Go, I would choose Gin or gqlgen, a lightweight and fast framework for web service creation. In the case of Python, FastAPI would be my choice due to its performance and easy implementation.

## Database:

Given my knowledge in PostgreSQL and MongoDB, I would choose PostgreSQL for structured data and MongoDB for more flexible storage.

## Project Structure:

### Functionalities Organization:

I would group the code based on business functionalities, e.g., users, products, orders, etc. Each module would have its folder with subfolders for models, controllers, and routes.

### Hexagonal Architecture:

If time allows, I would implement hexagonal architecture. This allows for a clearer separation of responsibilities and cleaner code, as well as decoupling business logic from external libraries or components.

## Middlewares and Design Patterns:

I would use middlewares to separate common logic and facilitate code reuse. Additionally, I would apply the repository pattern to abstract database access, improving testing and flexibility.

## Security and Error Handling:

I would implement security measures such as HTTPS, token-based authentication (JWT), and validate/sanitize all user inputs to prevent attacks. Moreover, I would establish a robust system to handle errors, logging them, and providing clear responses to clients.

## Scalability and Deployment:

### Horizontal Scalability:

I would use containers (Docker) and container orchestrators (like Kubernetes) for easy horizontal scalability.

### Load Balancing and Cloud Services:

I would implement load balancing to distribute traffic among multiple server instances and leverage AWS cloud services to enhance scalability and availability.

# Development Naming Policies

## Objective

Establish clear rules and conventions for the naming of elements in software development within the company. Consistency in naming enhances code readability, facilitates maintenance, and encourages effective collaboration among team members.

## Databases

### Database Names

Use snake_case for database names.

Example: ecommerce_database, user_data.

### Tables and Fields

Use snake_case for table and field names.

Example: user_accounts, created_at.

Use descriptive names and avoid unclear acronyms.

Example: product_categories instead of prod_cat.

## Variables and Functions

### Variables

Use camelCase for variable names.

Example: userName, totalSales.

Use descriptive names reflecting the variable's purpose.

### Functions

Use camelCase for function names.

Example: calculateTaxes, updateInventory.

Use descriptive and verbose function names.

Avoid generic names like function1 or doSomething.

## Classes

Use PascalCase for class names.

Example: UserModel, PurchaseOrder.

Use substantive and descriptive names indicating the main responsibility of the class.

## Git

### Branches

Use kebab-case for branch names.

Example: feature/new_feature, fix/error_fixed.

### Commits

Write clear and concise commit messages in English.

Use a header that succinctly describes the change.

Add additional details in the commit body if necessary.

```plaintext
feat: add new user authentication

- Implemented JWT authentication for user login.
- Updated user model to include additional fields.
```

### Tags

Use semantic versions for version tags.

Example: v1.0.0, v1.1.2.

## Documentation

Document code using clear and meaningful comments.

Use comments to explain the purpose of code blocks, functions, classes, and provide context when necessary.

## Conclusion

These naming policies are designed to create consistency and improve code readability throughout the project. It is crucial for all team members to adhere to these rules to maintain clean and easily understandable code. Additionally, these policies are expected to be periodically reviewed and adjusted as needed to adapt to the changing needs of the team and the project.

# Database Modeling

![Diagram](/assets/databaseDiagram.png)

```sql
-- Enable the uuid-ossp extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users Table
CREATE TABLE Users (
  UserID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  UserName VARCHAR(50) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Password VARCHAR(255) NOT NULL CHECK (LENGTH(Password) >= 8)
);

-- Authors Table
CREATE TABLE Authors (
  AuthorID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  AuthorName VARCHAR(100) NOT NULL,
  Biography TEXT
);

-- Collaborators Table
CREATE TABLE Collaborators (
  CollaboratorID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  CollaboratorName VARCHAR(100) NOT NULL,
  CollaboratorDescription TEXT
);

-- Videos Table
CREATE TABLE Videos (
  VideoID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  Title VARCHAR(255) NOT NULL,
  URL VARCHAR(255) NOT NULL,
  AuthorID UUID,
  CollaboratorID UUID,
  FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID),
  FOREIGN KEY (CollaboratorID) REFERENCES Collaborators(CollaboratorID)
);

-- Comments Table
CREATE TABLE Comments (
  CommentID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  UserID UUID,
  VideoID UUID,
  Content TEXT NOT NULL,
  PublicationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UserID) REFERENCES Users(UserID),
  FOREIGN KEY (VideoID) REFERENCES Videos(VideoID)
);

-- Reviews Table
CREATE TABLE Reviews (
  ReviewID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  UserID UUID,
  VideoID UUID,
  Rating INT CHECK (Rating >= 1 AND Rating <= 5),
  Comment TEXT,
  ReviewDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UserID) REFERENCES Users(UserID),
  FOREIGN KEY (VideoID) REFERENCES Videos(VideoID)
);

-- Trigger to validate the password length
CREATE OR REPLACE FUNCTION validate_password_length()
RETURNS TRIGGER AS $$
BEGIN
  IF LENGTH(NEW.Password) < 8 THEN
    RAISE EXCEPTION 'Password must have at least 8 characters';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER before_insert_validate_password_length
BEFORE INSERT ON Users
FOR EACH ROW
EXECUTE FUNCTION validate_password_length();

-- Trigger to validate that the comment content is not empty
CREATE OR REPLACE FUNCTION validate_comment_content()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.Content = '' THEN
    RAISE EXCEPTION 'Comment content cannot be empty';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER before_insert_validate_comment_content
BEFORE INSERT ON Comments
FOR EACH ROW
EXECUTE FUNCTION validate_comment_content();

```
In designing this relational database model, I've created tables for Users, Authors, Collaborators, Videos, Comments, and Reviews, each serving a specific purpose:

**Users Table:**
- Fields: UserID (UUID), UserName (VARCHAR), Email (VARCHAR), Password (VARCHAR).
- Passwords are stored only for example purposes, emphasizing the best practice of utilizing authentication providers like Auth0 for enhanced security.

**Authors Table:**
- Fields: AuthorID (UUID), AuthorName (VARCHAR), Biography (TEXT).

**Collaborators Table:**
- Fields: CollaboratorID (UUID), CollaboratorName (VARCHAR), CollaboratorDescription (TEXT).

**Videos Table:**
- Fields: VideoID (UUID), Title (VARCHAR), URL (VARCHAR), AuthorID (UUID), CollaboratorID (UUID).
- AuthorID and CollaboratorID are foreign keys referencing Authors and Collaborators tables, respectively.

**Comments Table:**
- Fields: CommentID (UUID), UserID (UUID), VideoID (UUID), Content (TEXT), PublicationDate (TIMESTAMP).
- UserID and VideoID are foreign keys linking to Users and Videos tables.

**Reviews Table:**
- Fields: ReviewID (UUID), UserID (UUID), VideoID (UUID), Rating (INT), Comment (TEXT), ReviewDate (TIMESTAMP).
- UserID and VideoID are foreign keys referencing Users and Videos tables.

In addition, triggers are implemented for data integrity:
- Trigger to validate password length before inserting into Users table.
- Trigger to ensure comment content is not empty before inserting into Comments table.

Furthermore, to enhance security, I've included a password field in the Users table solely for illustrative purposes. The recommended practice is to utilize authentication providers such as Auth0, storing passwords securely and externally to mitigate potential security risks associated with direct password storage in the database.

---

Certainly, depending on specific project requirements, one might explore a more nuanced database strategy beyond a single relational database. Considerations may include incorporating other technologies like Redis or MongoDB based on the nature of the tasks at hand.

For instance, if the project demands high-speed data retrieval or caching, Redis could be integrated to enhance performance. MongoDB, being a NoSQL database, may be preferable for scenarios where flexibility in data schema and scalability are crucial.

In the context of evolving project needs, adopting a microservices architecture with synchronized databases might offer scalability and flexibility. This could involve breaking down the application into smaller, independent services that communicate and synchronize data as needed.

Additionally, implementing a migration system, such as Prisma, facilitates database schema changes and version control. This is particularly valuable in agile development environments where the database structure evolves over time.

Moreover, considerations for bulk inserts might lead to optimizations in the database design or the adoption of specific database features tailored for efficient bulk operations.

In summary, the choice of database technologies and architectural patterns should align with the specific goals and demands of the project, considering factors like performance, scalability, flexibility, and ease of maintenance. The flexibility to adapt the database strategy based on evolving project requirements is key to building a robust and scalable system.
