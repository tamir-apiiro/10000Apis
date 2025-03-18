
const express = require('express')
import {handler5168} from "./handler5168";
const app = express()
app.get('/5168', handler5168)
app.listen(3000, () => {})
        