
const express = require('express')
import {handler5295} from "./handler5295";
const app = express()
app.get('/5295', handler5295)
app.listen(3000, () => {})
        