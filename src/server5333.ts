
const express = require('express')
import {handler5333} from "./handler5333";
const app = express()
app.get('/5333', handler5333)
app.listen(3000, () => {})
        