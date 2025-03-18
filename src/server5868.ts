
const express = require('express')
import {handler5868} from "./handler5868";
const app = express()
app.get('/5868', handler5868)
app.listen(3000, () => {})
        