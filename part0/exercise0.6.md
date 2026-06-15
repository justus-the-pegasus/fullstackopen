```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The JavaScript adds the new note to the page, it is currently not on the server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created
    deactivate server
```