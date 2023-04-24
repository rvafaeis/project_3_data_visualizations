# New York City Vehicle Accidents Data Visualizations
![image](https://user-images.githubusercontent.com/120426753/234059723-65adbf0d-5815-4957-90df-ae76dd28cc5c.png)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
### The aim of this project was to gather and analyze data from vehicle accidents in all five boroughs in New York City. This application was created to better understand vehicular accidents in New York City and to identify areas of concern from the New York City accident data obtained. 

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
### To start this project, the basic ETL data integration process was conducted. A raw dataset was extracted and downloaded as a .csv file from the NYC Open Data website. The data was then transformed and adjusted using the Python libaray Pandas to edit and clean the data. A new .csv file was created and imported into a new PostgreSQL database.

![image](https://user-images.githubusercontent.com/120426753/234062142-37cc36f8-d73d-4f5d-b1c7-4b8e7b3af4e3.png)
### [Clean DataFrame Creation](https://github.com/rvafaeis/project_3_data_visualizations/blob/main/Step%201.ipynb)
### [Cleaned Data CSV File](https://github.com/rvafaeis/project_3_data_visualizations/blob/main/Resources/CleanData.csv)


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
### After the PostgreSQL database was created, a Python flask application was created and used in order to load our data from the PostgreSQL database into our JavaScript files.
### [Python Flask](https://github.com/rvafaeis/project_3_data_visualizations/blob/main/apps.py)
### []()

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
### Creating an HTML page with data visualizations was the next step. The visualizations and contents of the HTML page were created using JavaScript libraries including D3, Leaflet, Plotly, and Highcharts. After formatting our CSS and HTML files, the final product was produced. The visualizations include:
####   1. A heatmap showing hotspots of accidents located in New York City
![image](https://user-images.githubusercontent.com/120426753/234131741-caf25094-3c6f-4a96-b917-81709f4d1fde.png)

####   2. Bar graphs detailing:
#####     - The amount of people killed and injured from accidents in New York City per borough.
![image](https://user-images.githubusercontent.com/120426753/234131797-9493faca-f303-405e-a728-8e92786f0b4e.png)

#####     - The amount of accidents caused by each vehicle type.
![image](https://user-images.githubusercontent.com/120426753/234131871-78061e3a-2af1-429c-992a-ed9a25ca1241.png)

#####     - The amount of accidents caused by each casue/accident factor. 
![image](https://user-images.githubusercontent.com/120426753/234133520-f7529f4d-9226-48c9-a54c-b29121a27d49.png)

####    3. Pie graphs detailing:
#####      - Percentage and amount of vehicle crashes per borough.
![image](https://user-images.githubusercontent.com/120426753/234133744-b3daa974-e140-4902-b056-dd1af2b725c4.png)

#####      - Percentage and amount of vehicle crashes per month.
![image](https://user-images.githubusercontent.com/120426753/234133666-2c0c0b8e-2d62-4453-a252-3d2d503adb6f.png)


