import os
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy


#instantiate the DB
db = SQLAlchemy()


# http://flask.pocoo.org/docs/0.12/patterns/appfactories/
def create_app():

    # instantiate the app
    app = Flask(__name__)

    # set the config
    app_settings = os.getenv('APP_SETTINGS')
    app.config.from_object(app_settings)

    # set up extensions
    db.init_app(app)

    from project.api.users import users_blueprint
    app.register_blueprint(users_blueprint)

    return app
