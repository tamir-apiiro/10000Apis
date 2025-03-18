
const express = require('express')
import {handler2671} from "./handler2671";
const app = express()
app.get('/2671', handler2671)
app.listen(3000, () => {})
        