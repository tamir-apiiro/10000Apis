
const express = require('express')
import {handler3119} from "./handler3119";
const app = express()
app.get('/3119', handler3119)
app.listen(3000, () => {})
        