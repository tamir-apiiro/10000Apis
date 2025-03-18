
const express = require('express')
import {handler5592} from "./handler5592";
const app = express()
app.get('/5592', handler5592)
app.listen(3000, () => {})
        