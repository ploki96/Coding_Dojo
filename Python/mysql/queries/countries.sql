
SELECT countries.name, languages.language, languages.percentage FROM countries JOIN languages ON countries.code = languages.country_code WHERE languages.language = 'Slovene' ORDER BY languages.percentage DESC;

SELECT countries.name, COUNT(cities.country_code) Cities FROM countries JOIN cities ON countries.code = cities.country_code GROUP BY countries.name ORDER BY COUNT(cities.country_code) DESC;

SELECT cities.name FROM cities JOIN countries ON countries.code = cties.country_code WHERE cities.population > 500000 AND cities.country_code = 'MEX' ORDER BY(cities.population) DESC;

SELECT countries.name, languages.language, languages.percentage FROM languages JOIN countries ON languages.country_code = countries.code WHERE languages.percentage > 89 ORDER BY(languages.percentage) DESC;

SELECT countries.name, countries.surface_area, countries.population FROM countries WHERE countries.surface_area < 501 AND countries.population > 100000;

SELECT countries.name FROM countries WHERE countries.government_form = 'Constitutional Monarchy' AND countries.capital > 200 AND countries.life_expectancy > 75;

SELECT countries.name, cities.name, cities.district, cities.population FROM cities JOIN countries ON countries.code = cities.country_code WHERE countries.name = 'Argentina' AND cities.district = 'Buenos Aires' AND cities.population > 500000;

SELECT countries.region, COUNT(countries.region) FROM countries GROUP BY countries.region ORDER BY countries.population DESC;






