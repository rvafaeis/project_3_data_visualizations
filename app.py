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