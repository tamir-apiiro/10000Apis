
const express = require('express')
import {handler2214} from "./handler2214";
const app = express()
app.get('/2214', handler2214)
app.listen(3000, () => {})
        