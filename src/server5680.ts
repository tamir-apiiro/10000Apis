
const express = require('express')
import {handler5680} from "./handler5680";
const app = express()
app.get('/5680', handler5680)
app.listen(3000, () => {})
        