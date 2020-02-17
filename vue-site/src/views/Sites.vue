<template>
    <div class="sites">
        <sites-create
            @add-item="addItem"
            :list="list"
            :options="createOptions">
        </sites-create>
        <sites-list
            @remove-site="removeSite"
            :list="list"
            :table-fields="tableFields">
        </sites-list>
    </div>
</template>

<script>
import axios from 'axios';
import SitesCreate from '@/components/SitesCreate';
import SitesList from '@/components/SitesList';
export default {
    data() {
        return {
            list: [],
            tableFields: ['url', 'ip', 'server', 'user', 'dns', 'lb', 'log'],
            createOptions: [
                { text: 'Staging Site', value: 'staging' },
                { text: 'Automatic Updates', value: 'authomatic' },
                { text: 'Update DNS', value: 'dns' }
            ]

        }
    },
    mounted() {
        axios.get('http://localhost:3000/api/sites')
            .then((response) => {
                console.log(response.data);
                this.list = response.data;
        });
    },
    components: {
        SitesCreate,
        SitesList
    },
    methods: {
        addItem(site) {
            this.list.push(site);
            this.$bvToast.toast(`Site ${site.url} successfully stored on server ${site.server.ip}`, {
            title: `Successfull`,
            toaster: 'b-toaster-top-right',
            solid: true,
            appendToast: true
            })
        },
        removeSite(item) {
            this.list = this.list.filter(i => i.server.ip !== item.server.ip);
            this.$bvToast.toast(`Site ${item.url} successfully deleted on server ${item.server.ip}`, {
            title: `Deleted`,
            toaster: 'b-toaster-top-right',
            variant: 'danger',
            solid: true,
            appendToast: true
            })
            
        }
        
        }
    }
</script>

<style>
    .sites {
        width: 100%;
        background-color: grey;
        color: black;
        padding: 100px 0;
    }
</style>