
const express = require('express')
import {handler5711} from "./handler5711";
const app = express()
app.get('/5711', handler5711)
app.listen(3000, () => {})
        