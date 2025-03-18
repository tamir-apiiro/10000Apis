
const express = require('express')
import {handler5041} from "./handler5041";
const app = express()
app.get('/5041', handler5041)
app.listen(3000, () => {})
        