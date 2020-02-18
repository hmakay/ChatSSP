const uuidv4 = require('uuid/v4')


const createUser = ({id,name = "", socketId = null, cpf="" } = {})=>(
	{
		id:uuidv4(),
		name,
		socketId,
		cpf
		
	}
)


const createMessage = ({message = "", sender = ""} = { })=>(
		{
			id:uuidv4(),
			time:getTime(new Date(Date.now())),
			message,
			sender
		
			
		}

	)


const createChat = ({messages = [], name = "Geral", users = {}, isCommunity = false} = {})=>(
	{
		
		id:uuidv4(),
		name: isCommunity ? name : createChatNameFromUsers(users),
		messages,
		users,
		typingUsers:[],
		isCommunity
	}
)

const createChatNameFromUsers = (users, excludedUser = "") => {
	
	const us = users.map(function(use) {
		return use.name;
	});
				
	return us.filter(u => u !== excludedUser).join(' & ') || "Chat Vazio"
}


const getTime = (date)=>{
	return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}

module.exports = {
	createMessage,
	createChat,
	createUser,
	createChatNameFromUsers
}

