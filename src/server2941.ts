
const express = require('express')
import {handler2941} from "./handler2941";
const app = express()
app.get('/2941', handler2941)
app.listen(3000, () => {})
        