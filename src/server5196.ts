
const express = require('express')
import {handler5196} from "./handler5196";
const app = express()
app.get('/5196', handler5196)
app.listen(3000, () => {})
        