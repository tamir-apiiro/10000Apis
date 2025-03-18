
const express = require('express')
import {handler5299} from "./handler5299";
const app = express()
app.get('/5299', handler5299)
app.listen(3000, () => {})
        