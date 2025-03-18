
const express = require('express')
import {handler5823} from "./handler5823";
const app = express()
app.get('/5823', handler5823)
app.listen(3000, () => {})
        