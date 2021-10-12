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
		<h1>New Product</h1>
		<form:form method="POST" action="/products" modelAttribute="product">
			<div>
				<form:label path="name">Name:</form:label>
				<form:input path="name" />			
			</div>
			<div>
				<form:label path="description">Description:</form:label>
				<form:input path="description" />			
			</div>
			<div>
				<form:label path="price">Price:</form:label>
				<form:input type="number" step="0.1" path="price" />			
			</div>
			<input type="submit" value="Create" >
		</form:form>
	</div>
</body>
</html>