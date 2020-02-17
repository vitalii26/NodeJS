<<template>
  <div class="sites__create">
    <div class="container">
      <b-form 
        @submit.prevent="addItem"
         class="bg-light pb-4 px-3 text-secondary">
        <div class="row mb-4">
          <div class="col-12 d-flex justify-content-between bg-white p-2">
            <h2>Add New Site</h2>
            <div class="button">
              <b-icon-question class="h2">
              </b-icon-question>
            <b-icon-camera-video class="h2">
            </b-icon-camera-video>
            </div>
          </div>
        </div>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          label="URL"
          label-for="input-horizontal"
          class="pb-2"
        >
          <b-input-group size="lg" 
            prepend="http(s)://">
            <b-form-input v-model="url"
             v-validate="{url: {require_protocol: false }, uniqueUrl: list}"
             name="url"
             placeholder="Your site"></b-form-input>
             <span class="sites__input-error">
              {{ errors.first('url') }}
            </span>
          </b-input-group>
        </b-form-group>
        <b-form-group
            class="pb-2"
            id="fieldset-horizontal"
            label-cols-sm="4"
            label-cols-lg="3"
            label="Server IP"
            label-for="input-horizontal"
          >
          <b-form-input  v-validate="{ip: true, uniqueIp: list}"
            name="serverIp"
            data-vv-as="Server IP"
            v-model="serverIp"
            placeholder="Your server IP">
          </b-form-input>
            <span class="sites__input-error">
              {{ errors.first('serverIp') }}
            </span>
        </b-form-group>
        <b-form-group
            class="pb-2"
            id="fieldset-horizontal"
            label-cols-sm="4"
            label-cols-lg="3"
            label="Server name"
            label-for="input-horizontal"
          >
          <b-form-input 
            v-validate="'alpha|min:3|max:20|required'"
            name="serverName"
            v-model="serverName"
            placeholder="Your server name">
          </b-form-input>
          <span class="sites__input-error">
            {{ errors.first('serverName') }}
          </span>
        </b-form-group>
        <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label-cols-lg="3"
            label="Bundles"
            label-for="input-horizontal"
          >
          <b-form-select></b-form-select>
        </b-form-group>
        <b-form-group label="Advanced options"
          label-cols-sm="3"
          label-cols-lg="3">
          <b-form-checkbox-group
            id="checkbox-group-1"
            :options="options"
            name="flavour-1"
            class="mb-4"
          >
          </b-form-checkbox-group>
        </b-form-group>
         <b-button type="submit"
            variant="info">
            <b-icon-check-circle>
            </b-icon-check-circle
            >Add Site
          </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
  import { BIconQuestion, BIconCameraVideo, BIconCheckCircle } from 'bootstrap-vue'
  import VeeValidate, { Validator } from 'vee-validate';
  
  const uniqueUrl = {
    getMessage(field) {
      return `Such ${field} already exists.`;
    },
    validate(value, args) {
      if (value) {
        let data = [];
        args.map(el => data.push(el.url));
        return data.indexOf(value) === -1;
      }
      return false;
    }
  };
  const uniqueIp = {
    getMessage(field) {
      return `Such ${field} already exists.`;
    },
    validate(value, args) {
      if (value) {
        let data = [];
        args.map(el => data.push(el.server.ip));
        return data.indexOf(value) === -1;
      }
      return false;
    }
  };

  Validator.extend("uniqueUrl", uniqueUrl, {
    immediate: false
  });
  Validator.extend("uniqueIp", uniqueIp, {
    immediate: false
  });

  export default {
    data() {
      return {
        url: '',
        serverIp: '',
        serverName: ''
      }
    },
    props: ['options', 'list'],
    components: {
      BIconQuestion,
      BIconCameraVideo,
      BIconCheckCircle,
      VeeValidate
    },
    methods: {
      addItem(site) {
        if (this.url && this.serverIp && this.serverName) {
          const site = {
            url: this.url,
            server: {
              name: this.serverName,
              ip: this.serverIp
            }
          }
          this.$emit('add-item', site);
          this.url = '',
          this.serverIp = '',
          this.serverName = ''
        }
      }
    }
    }
</script>
<style scoped>
  .button {
    position: relative;
    width: 100%;
    max-width: 70px;
    display: flex;
    justify-content: space-between;
  }
  .button ::after {
    display: block;
    content: '';
    width: 1px;
    height: 1rem;
    background-color: black;
    position: absolute;
    top: 0;

  }
  .sites__create {
    margin-bottom: 40px;
  }
  .sites__input-error {
    position: absolute;
    color: red;
    bottom: 0;
    transform: translateY(100%);
    font-size: .8rem;
  }
</style>