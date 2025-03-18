
const express = require('express')
import {handler5100} from "./handler5100";
const app = express()
app.get('/5100', handler5100)
app.listen(3000, () => {})
        