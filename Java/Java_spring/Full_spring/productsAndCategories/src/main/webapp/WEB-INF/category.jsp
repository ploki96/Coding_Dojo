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
		<h1><c:out value="${category.name}" /></h1>
		<div>
			<h2>Products</h2>
			<c:forEach items="${catProds}" var="product">
			<ul>
				<li><c:out value="${product.name}" /></li>
			</ul>
			</c:forEach>
		</div>
		<form method="POST" action="/categories/${category.id}/add">
			<div>
				<label>Add Product:</label>
				<select name="product">
				<c:forEach items="${products}" var="product">
					<option value="${product.id}"><c:out value="${product.name}" /></option>
				</c:forEach>
				</select>
			</div>
			<input type="submit" value="Add" />
		</form>
	</div>
</body>
</html>