
const express = require('express')
import {handler7525} from "./handler7525";
const app = express()
app.get('/7525', handler7525)
app.listen(3000, () => {})
        