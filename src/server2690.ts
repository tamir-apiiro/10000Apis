
const express = require('express')
import {handler2690} from "./handler2690";
const app = express()
app.get('/2690', handler2690)
app.listen(3000, () => {})
        