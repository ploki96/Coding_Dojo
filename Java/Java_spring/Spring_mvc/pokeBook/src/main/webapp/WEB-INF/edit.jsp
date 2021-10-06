<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
    <%@taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
    <%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>Edit Expense: </h1>
<span><a href="/expenses">Go back</a></span>

<form:form action="/expenses/edit/${expense.id}" method="post" modelAttribute="expense">
<input type="hidden" name="_method" value="put">
	<form:errors path="name"/><br>
	<form:errors path="vendor"/><br>
	<form:errors path="amount"/><br>
	<form:errors path="description"/><br>
    <p>
        <form:label path="name">name</form:label>     
        <form:input type="text" path="name"/>
    </p>
    <p>
        <form:label path="vendor">vendor</form:label>
        <form:input type="text" path="vendor"/>
    </p>
    <p>
        <form:label path="amount">amount</form:label>
        <form:input type="number" path="amount"/>
    </p>
    <p>
        <form:label path="description">description</form:label>
        <form:textarea path="description"/>
    </p>    
    <input type="submit" value="Submit"/>
</form:form>    
</body>
</html>