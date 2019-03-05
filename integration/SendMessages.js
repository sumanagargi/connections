//Program to send messages to Linkedin Connections
//Sumana Gargi M/05/03/2019

describe('connections',function(){
	
	
it('Visit Linkedin website',function(){
	
		//Load configurations
		cy.fixture('connections_config.json').then((conn)=>{
			
		
		//login
		cy.visit(conn.url)
		
		cy.get('#login-email')
		.type(conn.username)
		.should('have.value',conn.username)
		
		cy.get('#login-password')
		.type(conn.pwd)
		.should('have.value',conn.pwd)
		
		cy.get('#login-submit')
		.click()
	
		
		
		//Read profile name and message from the file
		cy.fixture('ProfileList.json').each(($str) =>
		{	
	
				//Visit the user profile
				cy.visit( conn.profileurl + $str.profilename)		
				
				//Click on message button
				cy.get('.pv-s-profile-actions__label').click()		

				//Enter the message
				cy.get('.msg-form__contenteditable').type($str.message)
				
				
				//Click on send button
				cy.get('.msg-form__send-button').click()
				
				

		})
		
				//logout
				cy.visit(conn.logout)
		
		})
	})

})
