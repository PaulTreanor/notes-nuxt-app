<template>
    <div>
        <Navbar/>
        <Nuxt />
    </div>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
    
    methods : {
        async checkIfSessionExists() {
            try {
                await Auth.currentSession();
                // Auth.currentAuthenticatedUser().then((user) => {
                //     console.log('user email = ' + user.attributes.email);
                // });
                // move to the home page 
                this.$router.push('/') 
                this.setLogIn();
            }
            catch(e) {
                if (e !== 'No current user') {
                alert(e);
                }
                let routeName = this.$route.name;
                if (routeName != 'signup'){
                    this.$router.push('/login')    
                }
                // do  nothaing, they're meant to be on signup page if not signed in 
            }
        },

        setLogIn() {
            this.$store.commit('logIn')
            
        },

        
    },

    created() {
        this.checkIfSessionExists();
    },

}
</script>