<template>
    <b-form @submit.prevent="addDonation">
        <b-form-group
            id="input-group-1"
            label="Your Name:"
            label-for="name">
            <b-form-input
                id="name"
                type="text"
                name="name"
                v-model = "name"
                v-validate="'min:6|max:20|required'"
                required
                placeholder="Enter name">
            </b-form-input>
            <span
                class="donation__input-error">
                {{ errors.first('name') }}
            </span>
        </b-form-group>
        <b-form-group
            id="input-group-2"
            label="Your email:"
            label-for="email">
            <b-form-input
                id="email"
                type="email"
                v-model = "email"
                name="email"
                v-validate="'email|required'"
                required
                placeholder="Enter email">
            </b-form-input>
            <span
                class="donation__input-error">
                {{ errors.first('email') }}
            </span>
        </b-form-group>
        <b-form-group
            id="input-group-3"
            label="Your donation:"
            label-for="donation">
            <b-form-input
                id="donation"
                type="number"
                v-model = "donation"
                name="donation"
                v-validate="'required'"
                required
                placeholder="Enter donation">
            </b-form-input>
            <span
                class="donation__input-error">
                {{ errors.first('donation') }}
            </span>
        </b-form-group>
        <b-form-textarea
            id="message"
            placeholder="Enter your message..."
            class="mb-3"
            v-model = "message"
            v-validate="'min:3'"
            name="message"
            rows="3"
            max-rows="6">
        </b-form-textarea>
        <b-button
            type="submit"
            variant="primary">
            Donate
        </b-button>
    </b-form>
</template>
<script>
import VeeValidate from 'vee-validate';
export default {
    data() {
        return {
        name: '',
        email: '',
        donation: 0,
        message: ''
      }
    },
    methods: {
        addDonation(donate) {
            if (this.name && this.email && this.donation) {
                const donate = {
                    name: this.name,
                    email: this.email,
                    donation: this.donation,
                    message: this.message
                }
                this.$emit('add-donation', donate);
                this.name = '',
                this.email = '',
                this.donation = 0,
                this.message = '',
                this.$router.push('/')
            }
      }
    }
}
</script>

<style>
    .donation__input-error {
        color: red;
        position: absolute;
        font-size: .8rem;
    }
</style>