
const express = require('express')
import {handler7101} from "./handler7101";
const app = express()
app.get('/7101', handler7101)
app.listen(3000, () => {})
        