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
        <h1><c:out value="${question.question}"/></h1>
        <div>
            <h2>Tags: </h2>
            <c:forEach items="${question.tags}" var="tag">
            <c:out value="${tag.subject}"/>
            </c:forEach>
        </div>
        <div>
            <table>
                <thead>
                    <th>Answers</th>
                </thead>
                <tbody>
                 <c:forEach items="${question.answers}" var="answer">
                     <tr>
                         <td><c:out value="${answer.answer}"/></td>
                     </tr>
                 </c:forEach>
                </tbody>
            </table>
            <div>
                <form:form action="/answers/${question.id}/new" method="POST" modelAttribute="answer">
                	<form:errors path="*" class="text-danger"/>
                    <div>
                        <h3>Add your answer:</h3>
                    </div>
                    <div>
                        <div>Answer</div>
                        <form:textarea path="answer" name="answer" cols="30" rows="10"></form:textarea>
                    </div>
                    <button type="submit">Answer it!</button>
                </form:form>
            </div>
        </div>
	</div>
</body>
</html>