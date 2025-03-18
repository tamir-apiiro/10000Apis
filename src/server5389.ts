
const express = require('express')
import {handler5389} from "./handler5389";
const app = express()
app.get('/5389', handler5389)
app.listen(3000, () => {})
        