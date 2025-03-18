
const express = require('express')
import {handler5718} from "./handler5718";
const app = express()
app.get('/5718', handler5718)
app.listen(3000, () => {})
        