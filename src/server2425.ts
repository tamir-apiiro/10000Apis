
const express = require('express')
import {handler2425} from "./handler2425";
const app = express()
app.get('/2425', handler2425)
app.listen(3000, () => {})
        