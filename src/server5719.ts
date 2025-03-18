
const express = require('express')
import {handler5719} from "./handler5719";
const app = express()
app.get('/5719', handler5719)
app.listen(3000, () => {})
        