
const express = require('express')
import {handler5593} from "./handler5593";
const app = express()
app.get('/5593', handler5593)
app.listen(3000, () => {})
        