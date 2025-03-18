
const express = require('express')
import {handler5197} from "./handler5197";
const app = express()
app.get('/5197', handler5197)
app.listen(3000, () => {})
        