
const express = require('express')
import {handler2823} from "./handler2823";
const app = express()
app.get('/2823', handler2823)
app.listen(3000, () => {})
        