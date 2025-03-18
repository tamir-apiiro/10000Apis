
const express = require('express')
import {handler5250} from "./handler5250";
const app = express()
app.get('/5250', handler5250)
app.listen(3000, () => {})
        