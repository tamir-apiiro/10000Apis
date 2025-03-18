
const express = require('express')
import {handler5941} from "./handler5941";
const app = express()
app.get('/5941', handler5941)
app.listen(3000, () => {})
        