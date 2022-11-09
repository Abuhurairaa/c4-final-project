// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '82fknd8uyf'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // DONE
  domain: 'dev-0-a1sv6s.us.auth0.com',            // Auth0 domain
  clientId: 'URkhFO5mPAT82SDufqhPwYCvKuJM8VGn',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
