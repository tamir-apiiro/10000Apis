
const express = require('express')
import {handler5771} from "./handler5771";
const app = express()
app.get('/5771', handler5771)
app.listen(3000, () => {})
        