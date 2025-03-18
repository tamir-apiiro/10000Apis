
const express = require('express')
import {handler5545} from "./handler5545";
const app = express()
app.get('/5545', handler5545)
app.listen(3000, () => {})
        