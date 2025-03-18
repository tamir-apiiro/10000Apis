
const express = require('express')
import {handler3260} from "./handler3260";
const app = express()
app.get('/3260', handler3260)
app.listen(3000, () => {})
        