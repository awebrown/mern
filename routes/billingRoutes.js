const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripePrivateKey);
const requireLogin = require('../middlewares/requireLogin')

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
      // console.log(req.body);
      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 credits',
        source: req.body.id
      });
      req.user.credits += 5;
      const user = await req.user.save();
      console.log(user);
      res.send(user);
      // console.log('[CHARGE]', charge);
    }
  );
};
