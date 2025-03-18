
const express = require('express')
import {handler5799} from "./handler5799";
const app = express()
app.get('/5799', handler5799)
app.listen(3000, () => {})
        