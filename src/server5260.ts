
const express = require('express')
import {handler5260} from "./handler5260";
const app = express()
app.get('/5260', handler5260)
app.listen(3000, () => {})
        