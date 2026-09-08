# Exercise 0.4: New note diagram

User creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the Save button.

```mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note content="Howdy"
    activate server

    Note left of server: The server saves the data

    server-->>browser: Status Code: 302 Found, Location: /exampleapp/notes
    deactivate server

    Note right of browser: The browser follows the redirect
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "Howdy", "date": "2026-09-08T08:14:32.991Z" }, ... ]
    deactivate server    

    Note right of browser: The browser executes the callback function that renders the notes 

```

# Exercise 0.5: Single page app diagram

Diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa

```mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the Javascript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "joy", "date": "2026-09-08T08:40:04.496Z" }, ... ]
    deactivate server    

    Note right of browser: The browser executes the callback function that renders the notes 
```

# Exercise 0.6: New note in Single page app diagram

Diagram depicting the situation where the user creates a new note using the single-page version of the app.

```mermaid

sequenceDiagram
    participant browser
    participant server

    Note right of browser: Browser (with spa.js) creates the note and adds it to the local notes array. Browser then redraws the notes

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa {content: "Howdy", date: "2026-09-08T09:16:09.604Z"}
    activate server
    server-->>browser: Status Code: 201 Created
    deactivate server
```
