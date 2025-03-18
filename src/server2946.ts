
const express = require('express')
import {handler2946} from "./handler2946";
const app = express()
app.get('/2946', handler2946)
app.listen(3000, () => {})
        