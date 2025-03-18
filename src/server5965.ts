
const express = require('express')
import {handler5965} from "./handler5965";
const app = express()
app.get('/5965', handler5965)
app.listen(3000, () => {})
        