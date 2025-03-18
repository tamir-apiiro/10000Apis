
const express = require('express')
import {handler5495} from "./handler5495";
const app = express()
app.get('/5495', handler5495)
app.listen(3000, () => {})
        