
const express = require('express')
import {handler5609} from "./handler5609";
const app = express()
app.get('/5609', handler5609)
app.listen(3000, () => {})
        