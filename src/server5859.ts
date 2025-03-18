
const express = require('express')
import {handler5859} from "./handler5859";
const app = express()
app.get('/5859', handler5859)
app.listen(3000, () => {})
        