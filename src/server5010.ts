
const express = require('express')
import {handler5010} from "./handler5010";
const app = express()
app.get('/5010', handler5010)
app.listen(3000, () => {})
        