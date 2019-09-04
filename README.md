# Overview #
This document describes how to setup your app for local and Heroku usage.
Some instructions in this guide require you to type instructions using a command line.
These instructions are contained in tick marks like this:  \`\`.
When running these instructions, you do not need to type the ticks, just the text inside them.

# Requirements
* A command line tool:
    * Mac - Terminal
    * Windows - Command Prompt
    * Linux - Terminal
* Python 3 - https://www.python.org/downloads/

# Heroku Requirements #
* A Heroku Account - https://www.heroku.com/
* Heroku Command Line Interface - https://devcenter.heroku.com/articles/heroku-cli#download-and-install
* Git - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

# Local Setup #
1. Start by navigating to the "flask-sockets" folder in your command line
2. Set up a local Python environment by running `python3 -m venv env`
3. Activate the environment by running `source env/bin/activate`
4. Install the necessary dependencies for your app by running `pip install -r requirements.txt`
5. Your app is now setup and can be run from your computer!
    * **Note**: You can stop using the 'env' python by typing `deactivate`

# Running Locally #
1. Start by navigating to the "flask-sockets" folder in your command line
2. If the 'env' python is not active, activate the environment by running `source env/bin/activate`
3. Edit line 4 of the 'app/static/js/index.js' file, change the 'https' to 'http'
    * **Note**: This will prevent CORS errors when testing locally [more Info here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
4. Start your app by running `heroku local` in your command line.
**Note**: You should see something like this in your command line
    ```
    [INFO] Starting gunicorn 19.9.0
    [INFO] Listening at: http://0.0.0.0:5000 (12345)
    [INFO] Using worker: threads
    [INFO] Booting worker with pid: 12345
    ```
5. Your app is now running, open your browser and head to http://0.0.0.0:5000 to see it!

# Running on Heroku #
1. Start by navigating to the "flask-sockets" folder in your command line
2. Login to Heroku by running `heroku login`
3. Create a new Heroku app by running `heroku apps:create your-app-name-here`
4. Set up a connection between your local app and the Heroku server by running `heroku git:remote -a your-app-name-here`
5. Send your code to the Heroku server by running `git push heroku master`
    * **Note**: At this point Heroku should spit out a bunch of messages about 'Collecting' and 'Downloading'

    Once it's done you should see a message like this:
    ```
    ...
    remote: -----> Launching...
    remote:        Released v3
    remote:        https://your-app-name-here.herokuapp.com/ deployed to Heroku
    ```
    This means your app has been successfully deployed to Heroku

6. Open your browser and head to the URL Heroku gives you to see your app online!

# Making Changes To The App #
In this example we'll change the header text of our app and then push the change to your Heroku app
1. Start by navigating to the 'flask-sockets' folder in your command line
2. Edit line 14 of the index.html file and replace the text 'A real time flask app' with 'Flask SocketIO is cool!'
3. Save the file
4. Add this change by running `git add app/templates/index.html`
5.  Commit this change to your app by running `git commit -m "Updated the index header"`
    * **Note**: The text in double quotes can be changed, it's just a message to help you keep track of the changes in your project
5. Send your new code to the Heroku server by running `git push heroku master`
6. Open your browser and head to the URL Heroku gives you to see your updated app!
