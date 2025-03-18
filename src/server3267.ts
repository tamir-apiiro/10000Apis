
const express = require('express')
import {handler3267} from "./handler3267";
const app = express()
app.get('/3267', handler3267)
app.listen(3000, () => {})
        