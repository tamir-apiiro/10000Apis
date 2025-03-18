
const express = require('express')
import {handler2344} from "./handler2344";
const app = express()
app.get('/2344', handler2344)
app.listen(3000, () => {})
        