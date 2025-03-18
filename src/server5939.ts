
const express = require('express')
import {handler5939} from "./handler5939";
const app = express()
app.get('/5939', handler5939)
app.listen(3000, () => {})
        