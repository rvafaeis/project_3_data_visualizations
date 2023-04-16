from flask import Flask, jsonify, render_template
from sqlalchemy import create_engine
import psycopg2#connect this engine to the pg
import json
from config import password
#from flask import sqlalchemy 
import datetime as dt 
from sqlalchemy.ext.automap import automap_base 
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session 
from sqlalchemy import create_engine, func, inspect

engine = create_engine(f'postgresql+psycopg2://postgres:{password}@localhost:5432/Project3_db')
Base = automap_base()
Base.prepare(engine, reflect=True)
Base.classes.keys()
crashes= Base.classes.NY_Crashes
app = Flask(__name__)
@app.route("/api/v1.0/data")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    """Return a list of all passenger names"""
    # Query all passengers
    results = session.query(crashes.BOROUGH).all()
    session.close()
    all_data = list(np.ravel(results))
    return jsonify(all_data)


#for x in crashes:
    #print(x)
session = Session(engine)
# app = Flask(__name__)
# # Routes
# @app.route("/")
# def main():
#     return (
#         f"Welcome to group_3 App_API Home Page!<br>"
#         f"Available Routes:<br>"
#         f"/api/v1.0/data<br>")

# @app.route("/api/v1.0/data")
# def data1():
#     data2=session.query(crashes).all()
#     list_data = []
#     for col, rows in data2:
#         dict_data = {}
#         dict_data[col] = rows
#         list_data.append(dict_data)

#     return jsonify(list_data)


if __name__ == '__main__':  
    app.run(debug=True) 