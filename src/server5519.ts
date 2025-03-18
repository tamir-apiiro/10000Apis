
const express = require('express')
import {handler5519} from "./handler5519";
const app = express()
app.get('/5519', handler5519)
app.listen(3000, () => {})
        