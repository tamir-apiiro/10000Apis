
const express = require('express')
import {handler5763} from "./handler5763";
const app = express()
app.get('/5763', handler5763)
app.listen(3000, () => {})
        