
const express = require('express')
import {handler7533} from "./handler7533";
const app = express()
app.get('/7533', handler7533)
app.listen(3000, () => {})
        