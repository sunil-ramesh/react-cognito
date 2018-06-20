export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-south-1",
    BUCKET: "node-app-meetup"
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://upmpszq7u7.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "",
    APP_CLIENT_ID: "",
    IDENTITY_POOL_ID: ""
  }
};