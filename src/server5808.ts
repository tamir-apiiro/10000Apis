
const express = require('express')
import {handler5808} from "./handler5808";
const app = express()
app.get('/5808', handler5808)
app.listen(3000, () => {})
        