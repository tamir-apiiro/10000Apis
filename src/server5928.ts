
const express = require('express')
import {handler5928} from "./handler5928";
const app = express()
app.get('/5928', handler5928)
app.listen(3000, () => {})
        