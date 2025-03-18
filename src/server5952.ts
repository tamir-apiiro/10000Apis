
const express = require('express')
import {handler5952} from "./handler5952";
const app = express()
app.get('/5952', handler5952)
app.listen(3000, () => {})
        