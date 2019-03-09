//Program to send Linkedin Invitations
//Sumana Gargi M/08/03/2019

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
		cy.fixture('profileList.csv','utf-8').then(($str) =>
		{	
					
				cy.wrap($str.split(/\n/))
				.each(($record)  => {
				
				const data = ($record.split(','))
				//Visit the user profile
				cy.visit( conn.profileurl + data[0])
				//Click on connect button
				cy.get('.pv-s-profile-actions__label').click()		
				//Click Add note button
				cy.get('.button-secondary-large').click()
				
				//Add message mentioned for that particular user		
				if((data[1]!=null))
					cy.get('#custom-message').type(data[1])
				 else	
					 cy.get('#custom-message').type(conn.defaultmessage)
				 
				 		
				//Click on done button
				cy.get('.send-invite__actions > .button-primary-large').click()

				})
	
			
				
				

		})
		
				//logout
				cy.visit(conn.logout)
		
		})
	})

})
