<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
    <%@taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>PokeBook</h1>
	<table>
		<tr>
			<td>Expense</td>
			<td>Vendor</td>
			<td>Amount</td>
			<td>Actions</td>
		</tr>
		<c:forEach var="expense" items="${expensesList}">
			<tr>
				<td><a href="/expenses/${expense.id}"><c:out value="${expense.name}"/></a></td>
				<td><c:out value="${expense.vendor}"/></td>
				<td>$<c:out value="${expense.amount}"/></td>
				<td>
				<a href="/expenses/${expense.id}/edit">Edit</a> | <form action="/expenses/{id}/delete" method="post">
    																	<input type="hidden" name="_method" value="delete">
    																	<input type="submit" value="Delete">
																	</form>
				</td>
			</tr>
		</c:forEach>
	</table>
	
	<h1>Track an expense:</h1>
	<form:form action="/expenses/new" method="post" modelAttribute="expense">
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