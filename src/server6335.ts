
const express = require('express')
import {handler6335} from "./handler6335";
const app = express()
app.get('/6335', handler6335)
app.listen(3000, () => {})
        