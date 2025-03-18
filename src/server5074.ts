
const express = require('express')
import {handler5074} from "./handler5074";
const app = express()
app.get('/5074', handler5074)
app.listen(3000, () => {})
        