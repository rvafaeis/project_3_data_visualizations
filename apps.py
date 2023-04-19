from flask import Flask, jsonify, render_template
from sqlalchemy import create_engine
import psycopg2  # connect this engine to the pg
import json
# from config import password
#from flask import sqlalchemy
import datetime as dt
from datetime import datetime
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect


engine = create_engine(
    f'postgresql+psycopg2://postgres:Ramtinmasoumi987$@localhost:5432/Project3_db')
# data = engine.execute('SELECT * FROM ny_crash ').fetchall()


# Flask Setup
app = Flask(__name__)

# Routes


@app.route("/")
def main():
    return (
        f"Welcome to group_1 first App_API Home Page!<br>"
        f"Available Routes:<br>"
        f"/api/v1.0/data<br>"

    )


@app.route("/api/v1.0/data")
def df():
    data = engine.execute('SELECT * FROM ny_crash ').fetchall()
    columns = ['Index', 'CRASH DATE', 'BOROUGH', 'LATITUDE', 'LONGITUDE', 'PERSONS INJURED', 'PERSONS KILLED',
               'PEDESTRIANS INJURED', 'PEDESTRIANS KILLED', 'CYCLIST INJURED', 'CYCLIST KILLED',
               'MOTORIST INJURED', 'MOTORIST KILLED', 'CONTRIBUTING FACTOR', 'VEHICLE TYPE']

    data_dict = {'Index': [], 'CRASH DATE': [], 'BOROUGH': [], 'LATITUDE': [], 'LONGITUDE': [], 'PERSONS INJURED': [], 'PERSONS KILLED': [], 'PEDESTRIANS INJURED': [
    ], 'PEDESTRIANS KILLED': [], 'CYCLIST INJURED': [],	'CYCLIST KILLED': [],	'MOTORIST INJURED': [],	'MOTORIST KILLED': [], 'CONTRIBUTING FACTOR': [],	'VEHICLE TYPE': []}

    for row in data:
        data_dict[columns[0]].append(str(row[0]))
        data_dict[columns[1]].append(str(row[1]))
        data_dict[columns[2]].append(str(row[2]))
        data_dict[columns[3]].append(str(row[3]))
        data_dict[columns[4]].append(str(row[4]))
        data_dict[columns[5]].append(str(row[5]))
        data_dict[columns[6]].append(str(row[6]))
        data_dict[columns[7]].append(str(row[7]))
        data_dict[columns[8]].append(str(row[8]))
        data_dict[columns[9]].append(str(row[9]))
        data_dict[columns[10]].append(str(row[10]))
        data_dict[columns[11]].append(str(row[11]))
        data_dict[columns[12]].append(str(row[12]))
        data_dict[columns[13]].append(str(row[13]))
        data_dict[columns[14]].append(str(row[14]))
    return jsonify(data_dict)

@app.route("/index")
def home():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)


    

