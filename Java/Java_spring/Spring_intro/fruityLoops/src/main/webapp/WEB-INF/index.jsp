<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Fruit Loops</title>
</head>
<body>
	<h1>Fruit Store</h1>
	<table>
		<tr>
			<th>Fruit</th>
			<th>Price</th>
		</tr>

		<c:forEach var="oneFruit" items="${fruitsList}">
			<tr>
				<td>
					<c:out value="${oneFruit.name}"></c:out>
				</td>
				<td>
					<c:out value="<fmt:formatNumber type="number" minFractionDigits="2" value="${oneFruit.price}"/>"></c:out>
				</td>
			</tr>
		</c:forEach>

		
	</table>
</body>
</html>