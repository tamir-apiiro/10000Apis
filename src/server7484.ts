
const express = require('express')
import {handler7484} from "./handler7484";
const app = express()
app.get('/7484', handler7484)
app.listen(3000, () => {})
        