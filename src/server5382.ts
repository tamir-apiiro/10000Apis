
const express = require('express')
import {handler5382} from "./handler5382";
const app = express()
app.get('/5382', handler5382)
app.listen(3000, () => {})
        