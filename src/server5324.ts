
const express = require('express')
import {handler5324} from "./handler5324";
const app = express()
app.get('/5324', handler5324)
app.listen(3000, () => {})
        