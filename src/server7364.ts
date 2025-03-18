
const express = require('express')
import {handler7364} from "./handler7364";
const app = express()
app.get('/7364', handler7364)
app.listen(3000, () => {})
        