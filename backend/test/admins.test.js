const router = require("express").Router();
const admin = require('../models/Admin');

test("Admin added", () => {
    router.post('/user-add', (req, res) => {
        const { errors, isValid } = validateRegisterInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(400).json({ email: 'Email already exists' });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                return res.status(200).json({message: 'Admin added successfully. Refreshing data...'})
                            }).catch(err => console.log(err));
                    });
                });
            }
        });
    });
})

test("Get Admins", () => {
    router.post('/user-data', (req, res) => {
        User.find({}).select(['-password']).then(user => {
            if (user) {
                return res.status(200).send(user);
            }
        });
    });
})

test("Admin delete", () => {
    router.post('/user-delete', (req, res) => {
        User.deleteOne({ _id: req.body._id}).then(user => {
            if (user) {
                return res.status(200).json({message: 'Admin deleted successfully. Refreshing data...', success: true})
            }
        });
    });
})

test("Admin update", () => {
    router.post('/user-update', (req, res) => {
        const { errors, isValid } = validateUpdateUserInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const _id = req.body._id;
        User.findOne({ _id }).then(user => {
            if (user) {
                if (req.body.password !== '') {
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(req.body.password, salt, (err, hash) => {
                            if (err) throw err;
                            user.password = hash;
                        });
                    });
                }
                let update = {'name': req.body.name, 'email': req.body.email, 'password': user.password};
                User.update({ _id: _id}, {$set: update}, function(err, result) {
                    if (err) {
                        return res.status(400).json({ message: 'Unable to update admin.' });
                    } else {
                        return res.status(200).json({ message: 'Admin updated successfully. Refreshing data...', success: true });
                    }
                });
            } else {
                return res.status(400).json({ message: 'Now admin found to update.' });
            }
        });
    });
})

test("Admin login", () => {
    router.post('/login', (req, res) => {
        const { errors, isValid } = validateLoginInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const email = req.body.email;
        const password = req.body.password;
        User.findOne({ email }).then(user => {
            if (!user) {
                return res.status(404).json({ email: 'Email not found' });
            }
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        name: user.name
                    };
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn: 31556926 // 1 year in seconds
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            });
                        }
                    );
                } else {
                    return res
                        .status(400)
                        .json({ password: 'Password incorrect' });
                }
            });
        });
    });
})



