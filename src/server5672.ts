
const express = require('express')
import {handler5672} from "./handler5672";
const app = express()
app.get('/5672', handler5672)
app.listen(3000, () => {})
        