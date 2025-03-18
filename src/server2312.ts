
const express = require('express')
import {handler2312} from "./handler2312";
const app = express()
app.get('/2312', handler2312)
app.listen(3000, () => {})
        