
const express = require('express')
import {handler5007} from "./handler5007";
const app = express()
app.get('/5007', handler5007)
app.listen(3000, () => {})
        