
const express = require('express')
import {handler5456} from "./handler5456";
const app = express()
app.get('/5456', handler5456)
app.listen(3000, () => {})
        