
const express = require('express')
import {handler5619} from "./handler5619";
const app = express()
app.get('/5619', handler5619)
app.listen(3000, () => {})
        