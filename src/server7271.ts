
const express = require('express')
import {handler7271} from "./handler7271";
const app = express()
app.get('/7271', handler7271)
app.listen(3000, () => {})
        