
const express = require('express')
import {handler5733} from "./handler5733";
const app = express()
app.get('/5733', handler5733)
app.listen(3000, () => {})
        