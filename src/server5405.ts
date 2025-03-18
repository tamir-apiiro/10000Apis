
const express = require('express')
import {handler5405} from "./handler5405";
const app = express()
app.get('/5405', handler5405)
app.listen(3000, () => {})
        