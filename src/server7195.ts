
const express = require('express')
import {handler7195} from "./handler7195";
const app = express()
app.get('/7195', handler7195)
app.listen(3000, () => {})
        