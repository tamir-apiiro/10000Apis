
const express = require('express')
import {handler5684} from "./handler5684";
const app = express()
app.get('/5684', handler5684)
app.listen(3000, () => {})
        