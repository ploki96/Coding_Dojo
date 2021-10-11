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
	<h1><c:out value="${book.title}"/></h1>
	<a href="/home">back to the shelves</a>
	<c:choose>
    <c:when test="${user.id == book.user.id}">
        <p>You read <c:out value="${book.title}"/> by <c:out value="${book.author}"/></p>
        <p>Here are your thoughts:</p>
        <p><c:out value="${book.thoughts}"/></p>
        <a href="/book/edit/${book.id}">Edit</a>
        <br />
    </c:when>    
    <c:otherwise>
        <p><c:out value="${book.user.userName}"/> read <c:out value="${book.title}"/> by <c:out value="${book.author}"/></p> 
        <p>Here are <c:out value="${book.user.userName}"/>'s thoughts:</p>
        <p><c:out value="${book.thoughts}"/></p>
        <br />
    </c:otherwise>
</c:choose>
</body>
</html>