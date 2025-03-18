
const express = require('express')
import {handler5212} from "./handler5212";
const app = express()
app.get('/5212', handler5212)
app.listen(3000, () => {})
        