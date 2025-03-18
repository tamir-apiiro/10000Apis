
const express = require('express')
import {handler5505} from "./handler5505";
const app = express()
app.get('/5505', handler5505)
app.listen(3000, () => {})
        