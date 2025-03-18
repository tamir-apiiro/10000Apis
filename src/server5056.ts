
const express = require('express')
import {handler5056} from "./handler5056";
const app = express()
app.get('/5056', handler5056)
app.listen(3000, () => {})
        