package com.axis.crud.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler
	public ResponseEntity<ErrorInfo> noIdFound(IDNotFoundException exception)
	{
		ErrorInfo errorInfo = new ErrorInfo();

		errorInfo.setErrorMessage(exception.getMsg());
		errorInfo.setHttpStatus(HttpStatus.NOT_FOUND.toString());
		
        
		return new ResponseEntity<ErrorInfo>(errorInfo,HttpStatus.NOT_FOUND);
	}
}
