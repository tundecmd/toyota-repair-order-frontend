export const msalConfig = {
  auth: {
    clientId: "cabaea8f-a2da-43fe-89b3-3f5e075f98ce",
    authority: "https://login.microsoftonline.com/{3a757258-af7b-4b8b-975d-43495bd162f1}", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    // redirectUri: "https://orgc81e8772.crm.dynamics.com/",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/"
};

export const dynamicsConfig = {
  dynamicsEndPoint: "https://orgc81e8772.crm.dynamics.com/main.aspx?appid=7da82123-9987-ec11-93b0-000d3a5c7171&pagetype=dashboard&id=eaa6e6bb-4712-ec11-b6e7-00224820f09b&type=system&_canOverride=true"
};