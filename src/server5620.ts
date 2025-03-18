
const express = require('express')
import {handler5620} from "./handler5620";
const app = express()
app.get('/5620', handler5620)
app.listen(3000, () => {})
        