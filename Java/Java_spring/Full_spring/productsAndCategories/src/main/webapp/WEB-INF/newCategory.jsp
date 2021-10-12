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
	<div id="container">
		<h1>New Category</h1>
		<form:form method="POST" action="/categories" modelAttribute="category">
			<div>
				<form:label path="name">Name:</form:label>
				<form:input path="name" />			
			</div>
			<input type="submit" value="Create" >
		</form:form>
	</div>
</body>
</html>