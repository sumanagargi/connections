describe('REST API',function(){
	
	it('Make a get request call',function(){
		
		cy.fixture('connections_config.json').then((conn) =>
		{
			
		cy.request({
			method: 'get',
			followRedirect: false, 
			log: true,
			url: 'https://api.linkedin.com/v2/me',
			
			headers:{
				'accept': 'application/json',
				'Authorization': conn.authorization
			},
			response: []
		})
			.then((response) => {
				cy.log(response.body)
				assert.equal(response.status,200)
				expect(response.body).to.not.be.null
				assert.equal(response.body.firstName.localized.en_US,'Test')
			})
		
		})
		
	})
})