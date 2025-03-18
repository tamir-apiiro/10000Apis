
const express = require('express')
import {handler5777} from "./handler5777";
const app = express()
app.get('/5777', handler5777)
app.listen(3000, () => {})
        