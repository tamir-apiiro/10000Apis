
const express = require('express')
import {handler5348} from "./handler5348";
const app = express()
app.get('/5348', handler5348)
app.listen(3000, () => {})
        