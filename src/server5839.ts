
const express = require('express')
import {handler5839} from "./handler5839";
const app = express()
app.get('/5839', handler5839)
app.listen(3000, () => {})
        