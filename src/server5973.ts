
const express = require('express')
import {handler5973} from "./handler5973";
const app = express()
app.get('/5973', handler5973)
app.listen(3000, () => {})
        