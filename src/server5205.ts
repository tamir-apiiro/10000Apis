
const express = require('express')
import {handler5205} from "./handler5205";
const app = express()
app.get('/5205', handler5205)
app.listen(3000, () => {})
        