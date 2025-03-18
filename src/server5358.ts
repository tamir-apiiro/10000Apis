
const express = require('express')
import {handler5358} from "./handler5358";
const app = express()
app.get('/5358', handler5358)
app.listen(3000, () => {})
        