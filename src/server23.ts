
const express = require('express')
import {handler23} from "./handler23";
const app = express()
app.get('/23', handler23)
app.listen(3000, () => {})
        