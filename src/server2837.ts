
const express = require('express')
import {handler2837} from "./handler2837";
const app = express()
app.get('/2837', handler2837)
app.listen(3000, () => {})
        