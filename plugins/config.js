const config = {
    s3: {
      REGION: "eu-west-1",
      BUCKET: "sst-notes-api-bucket-paultreanor",
    },
    apiGateway: {
      REGION: "eu-west-1",
      URL: "https://ggpf13gj3d.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "eu-west-1",
      USER_POOL_ID: "eu-west-1_BpfWTjV0M",
      APP_CLIENT_ID: "2s0gc4omnlbec3kojdomadi3ao",
      IDENTITY_POOL_ID: "eu-west-1:2ae312b1-3e05-4046-a784-022a0c7b5630",
    },
  };
  
  export default config;