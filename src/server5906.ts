
const express = require('express')
import {handler5906} from "./handler5906";
const app = express()
app.get('/5906', handler5906)
app.listen(3000, () => {})
        