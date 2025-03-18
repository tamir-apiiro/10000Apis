
const express = require('express')
import {handler5460} from "./handler5460";
const app = express()
app.get('/5460', handler5460)
app.listen(3000, () => {})
        