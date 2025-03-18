
const express = require('express')
import {handler5949} from "./handler5949";
const app = express()
app.get('/5949', handler5949)
app.listen(3000, () => {})
        