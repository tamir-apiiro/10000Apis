
const express = require('express')
import {handler5391} from "./handler5391";
const app = express()
app.get('/5391', handler5391)
app.listen(3000, () => {})
        