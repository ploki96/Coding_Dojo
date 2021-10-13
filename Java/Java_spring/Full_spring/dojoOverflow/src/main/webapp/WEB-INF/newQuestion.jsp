<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div id="container">
		<h1>What is your question?</h1>
		<div>
			<form method="POST" action="/questions/new">
				<c:out value="${error}" />
				<form:errors path="*" class="text-danger"></form:errors>
				<div>
					<div>Questions:</div>
					<textarea name="question"></textarea>
				</div>
				<div>
					<div>Tags:</div>
					<input type="text" name="tags">
				</div>
				<input type="submit" value="Submit">
			</form>
		</div>
	</div>
</body>
</html>