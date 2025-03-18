
const express = require('express')
import {handler5702} from "./handler5702";
const app = express()
app.get('/5702', handler5702)
app.listen(3000, () => {})
        