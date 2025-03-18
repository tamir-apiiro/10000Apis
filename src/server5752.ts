
const express = require('express')
import {handler5752} from "./handler5752";
const app = express()
app.get('/5752', handler5752)
app.listen(3000, () => {})
        