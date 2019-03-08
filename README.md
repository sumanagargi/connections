# connections
This is a Program to send Linked In Invitation and Messages using Cypress.io.

User List and messages are configured in a file.

	1) Check out the files to local path in the system
  
	2) Copy the integration folder from the check out, to integration folder in the cypress project path in the system
  
	3) Copy the fixtures folder from the check out, to fixtures folder in the cypress project path in the system

Editing properties file
 *This file will have all the configured properties for logging in
 
	4) fixtures\connections_config.json  
   
     a) Change the username and pwd with the valid linkedin userid and password

*This file will have profile details for which invitation or message has to be sent
	5) fixtures\profilelist.csv	   
  		
    a) Format
	   profileid,message
	   profileid
		Example:
			a) Replace profileid with linkedin profile id available in the public linkedin url
				Linkedin Public url:  https://in.linkedin.com/in/sumana-gargi-92199612
			b) Provide the custom message, if not given default message will be sent
	
	sumana-gargi-92199612,Please accept my invitation
        sumana-gargi-92199612
		
	*Can give multiple profiles in the specified format

How to run	

	6) Start the cypress
  
	7) Send_Inv.js for sending invitation will be visible in the Cypress UI.
  
	8) Run the file to send the invitation for the configured user list in fixtures\profilelist.csv  
  
	9) Send_Msg.js for sending messases will be visible in the Cypress UI.
  
	10) Run the file to send the follow up messages for the configured user list in the fixtures\profilelist.csv
	
	
REST SAMPLE CALL Implementation is available in the file Rest_Request.js under intergration folder.

To execute it access_token is required. 

Make the necessary changes in connections_config.json file under fixtures folder
