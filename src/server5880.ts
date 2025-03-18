
const express = require('express')
import {handler5880} from "./handler5880";
const app = express()
app.get('/5880', handler5880)
app.listen(3000, () => {})
        