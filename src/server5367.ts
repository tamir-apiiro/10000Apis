
const express = require('express')
import {handler5367} from "./handler5367";
const app = express()
app.get('/5367', handler5367)
app.listen(3000, () => {})
        