###Cloning the repo and running the app in a browser

After cloning the repo, while in the project directory from the command line, run npm install.
Once npm installs all dependencies, run npm start. The app will run in your browser.

The app will load with no stored locations. As the user adds locations (city name or zip code), if the entered locations are valid, they will be stored in device storage and be available for subsequent uses.

###NOTES
While this app implements all of the stated requirements, the "Remove Selected" requirement could be implemented better. My desire was to create a custom dropdown/combobox where each option item in the list had a delete icon (red 'X' or similar) on the far right of its label. That would keep the UI cleaner and still be intuitive for the user. I ran out of time to create my own dropdown.
