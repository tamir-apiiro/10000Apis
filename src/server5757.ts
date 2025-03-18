
const express = require('express')
import {handler5757} from "./handler5757";
const app = express()
app.get('/5757', handler5757)
app.listen(3000, () => {})
        