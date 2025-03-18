
const express = require('express')
import {handler5806} from "./handler5806";
const app = express()
app.get('/5806', handler5806)
app.listen(3000, () => {})
        