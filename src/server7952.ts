
const express = require('express')
import {handler7952} from "./handler7952";
const app = express()
app.get('/7952', handler7952)
app.listen(3000, () => {})
        