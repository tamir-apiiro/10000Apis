
const express = require('express')
import {handler2552} from "./handler2552";
const app = express()
app.get('/2552', handler2552)
app.listen(3000, () => {})
        