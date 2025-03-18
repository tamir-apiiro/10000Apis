
const express = require('express')
import {handler5712} from "./handler5712";
const app = express()
app.get('/5712', handler5712)
app.listen(3000, () => {})
        