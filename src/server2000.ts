
const express = require('express')
import {handler2000} from "./handler2000";
const app = express()
app.get('/2000', handler2000)
app.listen(3000, () => {})
        