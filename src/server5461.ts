
const express = require('express')
import {handler5461} from "./handler5461";
const app = express()
app.get('/5461', handler5461)
app.listen(3000, () => {})
        