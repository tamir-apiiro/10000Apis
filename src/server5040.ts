
const express = require('express')
import {handler5040} from "./handler5040";
const app = express()
app.get('/5040', handler5040)
app.listen(3000, () => {})
        