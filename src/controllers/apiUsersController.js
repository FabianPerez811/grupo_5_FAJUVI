const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.Users
            .findAll()
            .then(users => {
                return res.status(200).json({
                    count: users.length,
                    users: users.map(user => {
                        return {
                            id: user.id,
                            name: user.firstName,
                            lastname: user.lastName,
                            email: user.email,
                            detail: "http://localhost:3030/user/" + user.id,
                            image: "http://localhost:3030" + user.profileImage
                        };
                    }),
                    lastUser: users[users.length - 1]
                })
            })
    },
    details: (req, res) => {
        db.Users.findByPk(req.params.id)
            .then(user => {
                const u = {
                    name: user.firstName,
                    lastname: user.lastName,
                    email: user.email,
                };
                return res.status(200).json({

                    user: u,
                    img: "http://localhost:3030" + user.profileImage
                })
            })

    }
}