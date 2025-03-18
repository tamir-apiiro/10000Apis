
const express = require('express')
import {handler5795} from "./handler5795";
const app = express()
app.get('/5795', handler5795)
app.listen(3000, () => {})
        