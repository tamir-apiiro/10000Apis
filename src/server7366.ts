
const express = require('express')
import {handler7366} from "./handler7366";
const app = express()
app.get('/7366', handler7366)
app.listen(3000, () => {})
        