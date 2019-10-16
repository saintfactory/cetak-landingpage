/* eslint-disable */
const admin = require('../admin/admin'); // From earlier
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../index');
const rp = require('request-promise');
require('dotenv').load();
chai.use(chaiHttp);
const uid = 'test-uid'; // You can name it whatever you want.
let customToken = null;
let idToken = null;

describe('Our App', () => {
    before(async ()=> {
        try {
            /* 
            await knex.migrate.rollback()
            await knex.migrate.latest()
            await knex.seed.run()
            */

            customToken = await admin.auth().createCustomToken(uid)

            // Swap custom token for an idToken
            const res = await rp({
                url: `https://www.googleapis.com/identifytoolkit/v3/relyingparty/verifyCustomToken?key=${process.env.FIREBASE_WEB_API_KEY}`,
                method: 'POST',
                body: {
                    token: customToken,
                    returnSecureToken: true
                },
                json: true
            })

            idToken = res.idToken
        } catch(error) {
            console.log(error)
        }
    })
})

it('Display a welcome message', done => {
    chai
        .request(app)
        .get('/')
        .set('Authorization', idToken)
        .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.text).to.be.a('string')
            done()
        })
})

module.exports = server;