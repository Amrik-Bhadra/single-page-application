<template>
    <main class="currency-convertor bg-body-tertiary w-100 d-flex justify-content-center align-items-center">
        <div class="container bg-white h-80 w-50 py-5 px-4 rounded-4 d-flex flex-column align-items-center">
            <h1 class="w-100 text-center text-primary">Currency Converter</h1>
            <div class="converter-box mt-4 w-75 d-flex justify-content-between">
                <div class="mb-4 w-100 me-3">
                    <label for="amountInRupees" class="form-label">Amount in Rupees</label>
                    <input type="number" class="form-control" id="amountInRupees" v-model="amountInInr" @input="convertToDollars" />
                </div>
                
                <div class="mb-4 w-100">
                    <label for="amountInDolars" class="form-label">Amount in Dollars</label>
                    <input type="number" class="form-control" id="amountInDolars" v-model="amountInDolars" @input="convertToRupees" />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                amountInInr: null,
                amountInDolars: null
            };
        },
        methods: {
            convertToDollars() {
                if (this.amountInInr) {
                    this.amountInDolars = (this.amountInInr * 0.014).toFixed(2);
                } else {
                    this.amountInDolars = null;
                }
            },
            convertToRupees() {
                if (this.amountInDolars) {
                    this.amountInInr = (this.amountInDolars * 84.07).toFixed(2);
                } else {
                    this.amountInInr = null;
                }
            }
        }
    };
</script>

<style>
    .container{
        box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    }
    .currency-convertor{
        min-height: calc(100vh - 70px);
    }
</style>
