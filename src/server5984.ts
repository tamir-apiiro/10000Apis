
const express = require('express')
import {handler5984} from "./handler5984";
const app = express()
app.get('/5984', handler5984)
app.listen(3000, () => {})
        