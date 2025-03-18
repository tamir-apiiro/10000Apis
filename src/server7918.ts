
const express = require('express')
import {handler7918} from "./handler7918";
const app = express()
app.get('/7918', handler7918)
app.listen(3000, () => {})
        