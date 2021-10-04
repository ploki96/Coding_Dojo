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
	<h1>You have visited <a href="/">http://localhost:8080</a> <c:out value="${count}"/> times</h1>
	<a href="/double">Add Two</a>
	<a href="/delete">Delete</a>
</body>
</html>