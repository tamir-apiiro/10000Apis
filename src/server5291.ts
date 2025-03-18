
const express = require('express')
import {handler5291} from "./handler5291";
const app = express()
app.get('/5291', handler5291)
app.listen(3000, () => {})
        