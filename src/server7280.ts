
const express = require('express')
import {handler7280} from "./handler7280";
const app = express()
app.get('/7280', handler7280)
app.listen(3000, () => {})
        