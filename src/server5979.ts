
const express = require('express')
import {handler5979} from "./handler5979";
const app = express()
app.get('/5979', handler5979)
app.listen(3000, () => {})
        