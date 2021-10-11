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
	<h1>Welcome <c:out value="${user.userName}"/></h1>
	<a href="/logout">logout</a>
	<p>Books from everyone's shelves</p>
	<a href="/bookForm">Add a book to my shelf!</a>
	
	<table>
		<tr>
			<td>Title</td>
			<td>Author Name</td>
			<td>Posted By</td>
		</tr>
		<c:forEach items="${books}" var="book">
			<tr>
				<td><a href="/book/${book.id}"><c:out value="${book.title}" /></a></td>
				<td><c:out value="${book.author}" /></td>
				<td><c:out value="${book.user.userName}" /></td>
			</tr>
			</c:forEach>
	</table>
	
</body>
</html>