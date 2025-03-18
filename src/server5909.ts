
const express = require('express')
import {handler5909} from "./handler5909";
const app = express()
app.get('/5909', handler5909)
app.listen(3000, () => {})
        