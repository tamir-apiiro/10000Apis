
const express = require('express')
import {handler5548} from "./handler5548";
const app = express()
app.get('/5548', handler5548)
app.listen(3000, () => {})
        