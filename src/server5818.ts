
const express = require('express')
import {handler5818} from "./handler5818";
const app = express()
app.get('/5818', handler5818)
app.listen(3000, () => {})
        