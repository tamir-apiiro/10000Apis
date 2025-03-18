
const express = require('express')
import {handler5654} from "./handler5654";
const app = express()
app.get('/5654', handler5654)
app.listen(3000, () => {})
        