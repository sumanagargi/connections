//Program to send Linkedin Invitations
//Sumana Gargi M/05/03/2019

describe('connections',function(){
	
	
it('Visit Linkedin website',function(){
	
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
				
				//Click on connect button
				cy.get('.pv-s-profile-actions__label').click()		
				//Click Add note button
				cy.get('.button-secondary-large').click()
				
				//Add message mentioned for that particular user		
				cy.get('#custom-message').type($str.message)	
				//Click on done button
				cy.get('.send-invite__actions > .button-primary-large').click()
				
				

		})
		
				//logout
				cy.visit(conn.logout)
		
		})
	})

})
