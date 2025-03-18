
const express = require('express')
import {handler5036} from "./handler5036";
const app = express()
app.get('/5036', handler5036)
app.listen(3000, () => {})
        