userRoutes.route('/update/:id').post(function(req, res){
    User.findById(req.params.id, function(err, user){
        if (!user){
            res.status(400).send({'status': 'failure', 'mssg': 'Unable to find data'});
        } else {
            user.first_name = req.body.first_name;
            user.email = req.body.email;
            user.contato = req.body.contato;

            user.save().then(business => {
                res.status(200).json({'status': 'sucess', 'mssg': 'Update complete'});
            })
        }
    });
});

userRoutes.route('/detete/:id').get(function(req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err,){
        if(err){
            res.status(400).send({'status': 'failure', 'mssg':'Something went wrong'});
        }
        else {
            res.status(200).json({'status': 'sucess', 'mssg': 'Delete successfully'});
        }
    });
});