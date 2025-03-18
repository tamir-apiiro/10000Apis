
const express = require('express')
import {handler5747} from "./handler5747";
const app = express()
app.get('/5747', handler5747)
app.listen(3000, () => {})
        