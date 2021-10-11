<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Change your Entry</h1>
	<a href="/home">back to the shelves</a>
	<form:form action="/edit/${book.id}" method="post" modelAttribute="book">
	
        <div class="form-group">
            <label>Title: </label>
            <form:input path="title" class="form-control" />
            <form:errors path="title" class="text-danger" />
        </div>
        <div class="form-group">
            <label>Author: </label>
            <form:input path="author" class="form-control" />
            <form:errors path="author" class="text-danger" />
        </div>
        <div class="form-group">
            <label>Thoughts: </label>
            <form:input path="thoughts" class="form-control" />
            <form:errors path="thoughts" class="text-danger" />
        </div>

        <input type="submit" value="Edit Book" class="btn btn-primary" />
    </form:form>
</body>
</html>