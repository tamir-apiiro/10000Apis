
const express = require('express')
import {handler5571} from "./handler5571";
const app = express()
app.get('/5571', handler5571)
app.listen(3000, () => {})
        