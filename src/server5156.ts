
const express = require('express')
import {handler5156} from "./handler5156";
const app = express()
app.get('/5156', handler5156)
app.listen(3000, () => {})
        