<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form action="/send" method="post">
		<label for="years">Pick any number from 5 to 25: </label>
		<input type="number" name="years"><br>
		<label for="city">Enter the name of any city: </label>
		<input type="text" name="city"><br>
		<label for="person">Enter the name of any real person</label>
		<input type="text" name="person"><br>
		<label for="hobby">Enter professional endeavor or hobby: </label>
		<input type="text" name="hobby"><br>
		<label for="living">Enter any type of living thing: </label>
		<input type="text" name="living"><br>
		<label for="compliment">Say something nice to someone: </label>
		<input type="text" name="compliment"><br>
		<p>Send and show a friend</p>
		<input type="submit" value="submit">
	</form>
</body>
</html>