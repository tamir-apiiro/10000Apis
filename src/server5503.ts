
const express = require('express')
import {handler5503} from "./handler5503";
const app = express()
app.get('/5503', handler5503)
app.listen(3000, () => {})
        