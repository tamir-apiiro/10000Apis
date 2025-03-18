
const express = require('express')
import {handler5796} from "./handler5796";
const app = express()
app.get('/5796', handler5796)
app.listen(3000, () => {})
        