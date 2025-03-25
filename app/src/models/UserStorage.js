class UserStorage {
    static #users = {
        id: ['cheon', 'young', '123'],
        password: ['1234', '123', '123'],
        name: ['천영무', '병영무신', '천병무신']
    }

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field]
            }
            return newUsers;
        }, {})
        return newUsers;
    }
}

module.exports = UserStorage;