export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "jprowan-notes"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://8p84k8zchi.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_A6AmQUZmh",
    APP_CLIENT_ID: "4v1n12l44ntm5i85064bsh89lb",
    IDENTITY_POOL_ID: "us-west-2:4cad750c-515f-487c-b8b8-1094cf984e3d"
  }
};