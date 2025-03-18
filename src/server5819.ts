
const express = require('express')
import {handler5819} from "./handler5819";
const app = express()
app.get('/5819', handler5819)
app.listen(3000, () => {})
        