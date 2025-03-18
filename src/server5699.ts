
const express = require('express')
import {handler5699} from "./handler5699";
const app = express()
app.get('/5699', handler5699)
app.listen(3000, () => {})
        