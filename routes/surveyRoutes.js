const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {

    app.get('/api/surveys/thanks', (req, res) => {
        res.send('Thanks for voting !')
    })
    
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title, 
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        //Send an email
        const mailer = new Mailer(survey, surveyTemplate(survey));

        try {
            const response = await mailer.send();

            console.log(response);

            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
        } catch(err) {
            res.status(422).send(err);
        }
        
    });
} 