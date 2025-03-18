
const express = require('express')
import {handler5157} from "./handler5157";
const app = express()
app.get('/5157', handler5157)
app.listen(3000, () => {})
        