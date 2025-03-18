
const express = require('express')
import {handler5469} from "./handler5469";
const app = express()
app.get('/5469', handler5469)
app.listen(3000, () => {})
        