package com.axis.crud.exception;

public class ErrorInfo {

	private String errorMessage;

    private String httpStatus;

    public ErrorInfo() {

    }

    public ErrorInfo(String errorMessage, String httpStatus) {

        super();

        this.errorMessage = errorMessage;

        this.httpStatus = httpStatus;


    }

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getHttpStatus() {
		return httpStatus;
	}

	public void setHttpStatus(String httpStatus) {
		this.httpStatus = httpStatus;
	}
    
}

