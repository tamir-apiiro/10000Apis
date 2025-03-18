
const express = require('express')
import {handler5686} from "./handler5686";
const app = express()
app.get('/5686', handler5686)
app.listen(3000, () => {})
        