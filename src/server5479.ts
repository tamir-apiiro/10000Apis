
const express = require('express')
import {handler5479} from "./handler5479";
const app = express()
app.get('/5479', handler5479)
app.listen(3000, () => {})
        