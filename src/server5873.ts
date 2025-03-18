
const express = require('express')
import {handler5873} from "./handler5873";
const app = express()
app.get('/5873', handler5873)
app.listen(3000, () => {})
        