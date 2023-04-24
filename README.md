# New York City Vehicle Accidents Data Visualizations
![image](https://user-images.githubusercontent.com/120426753/234059723-65adbf0d-5815-4957-90df-ae76dd28cc5c.png)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
### The aim of this project was to gather and analyze data from vehicle accidents in all five boroughs in New York City. This application was created to better understand vehicular accidents in New York City and to identify areas of concern from the New York City accident data obtained. 

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
### To start this project, the basic ETL data integration process was conducted. A raw dataset was extracted and downloaded as a .csv file from the NYC Open Data website. The data was then transformed and adjusted using the Python libaray Pandas to edit and clean the data. A new .csv file was created and imported into a new PostgreSQL database.  
![image](https://user-images.githubusercontent.com/120426753/234062142-37cc36f8-d73d-4f5d-b1c7-4b8e7b3af4e3.png)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
### After the PostgreSQL database was created, a Python flask application was created and used in order to load our data from the PostgreSQL database into our JavaScript files.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
### Creating an HTML page with data visualizations was the next step. The visualizations and contents of the HTML page were created using JavaScript libraries including D3, Leaflet, Plotly, and Highcharts. After formatting our CSS and HTML files, the final product was produced. The visualizations include:
    1. A heatmap showing hotspots of accidents located in New York City
    2. Bar graphs detailing:
       a. The amount of people killed and injured from accidents in New York City per borough.
       b. The amount of accidents caused by each vehicle type.
       c. The amount of accidents caused by each casue/accident factor. 
    3. Pie graphs detailing:
       a. Percentage and amount of vehicle crashes per borough.
       b. Percentage and amount of vehicle crashes per month.


