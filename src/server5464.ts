
const express = require('express')
import {handler5464} from "./handler5464";
const app = express()
app.get('/5464', handler5464)
app.listen(3000, () => {})
        