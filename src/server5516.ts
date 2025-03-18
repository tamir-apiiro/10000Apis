
const express = require('express')
import {handler5516} from "./handler5516";
const app = express()
app.get('/5516', handler5516)
app.listen(3000, () => {})
        