
const express = require('express')
import {handler5481} from "./handler5481";
const app = express()
app.get('/5481', handler5481)
app.listen(3000, () => {})
        