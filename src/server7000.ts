
const express = require('express')
import {handler7000} from "./handler7000";
const app = express()
app.get('/7000', handler7000)
app.listen(3000, () => {})
        