import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

// amplify setup
// see https://docs.amplify.aws/cli/graphql/overview/#setup-your-app-code
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

createApp(App).use(Quasar, quasarUserOptions).mount('#app')
