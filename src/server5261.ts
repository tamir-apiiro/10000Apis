
const express = require('express')
import {handler5261} from "./handler5261";
const app = express()
app.get('/5261', handler5261)
app.listen(3000, () => {})
        