
const express = require('express')
import {handler2993} from "./handler2993";
const app = express()
app.get('/2993', handler2993)
app.listen(3000, () => {})
        