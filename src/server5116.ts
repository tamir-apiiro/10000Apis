
const express = require('express')
import {handler5116} from "./handler5116";
const app = express()
app.get('/5116', handler5116)
app.listen(3000, () => {})
        