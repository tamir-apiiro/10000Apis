
const express = require('express')
import {handler90} from "./handler90";
const app = express()
app.get('/90', handler90)
app.listen(3000, () => {})
        