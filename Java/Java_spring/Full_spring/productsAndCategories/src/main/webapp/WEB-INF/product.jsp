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
		<h1><c:out value="${product.name}" /></h1>
		<div>
			<h2>Categories</h2>
			<c:forEach items="${prodCats}" var="category">
			<ul>
				<li><c:out value="${category.name}" /></li>
			</ul>
			</c:forEach>
		</div>
		<form method="POST" action="/products/${product.id}/add">
			<div>
				<label>Add Category:</label>
				<select name="category">
				<c:forEach items="${categories}" var="category">
					<option value="${category.id}"><c:out value="${category.name}" /></option>
				</c:forEach>
				</select>
			</div>
			<input type="submit" value="Add" />
		</form>
	</div>
</body>
</html>