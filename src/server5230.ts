
const express = require('express')
import {handler5230} from "./handler5230";
const app = express()
app.get('/5230', handler5230)
app.listen(3000, () => {})
        