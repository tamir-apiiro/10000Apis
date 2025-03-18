
const express = require('express')
import {handler5743} from "./handler5743";
const app = express()
app.get('/5743', handler5743)
app.listen(3000, () => {})
        