
const express = require('express')
import {handler5889} from "./handler5889";
const app = express()
app.get('/5889', handler5889)
app.listen(3000, () => {})
        