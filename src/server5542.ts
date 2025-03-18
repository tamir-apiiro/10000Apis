
const express = require('express')
import {handler5542} from "./handler5542";
const app = express()
app.get('/5542', handler5542)
app.listen(3000, () => {})
        