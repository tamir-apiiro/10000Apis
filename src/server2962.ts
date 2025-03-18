
const express = require('express')
import {handler2962} from "./handler2962";
const app = express()
app.get('/2962', handler2962)
app.listen(3000, () => {})
        