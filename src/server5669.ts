
const express = require('express')
import {handler5669} from "./handler5669";
const app = express()
app.get('/5669', handler5669)
app.listen(3000, () => {})
        