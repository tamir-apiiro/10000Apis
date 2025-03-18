
const express = require('express')
import {handler5916} from "./handler5916";
const app = express()
app.get('/5916', handler5916)
app.listen(3000, () => {})
        