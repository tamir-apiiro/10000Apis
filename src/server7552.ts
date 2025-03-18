
const express = require('express')
import {handler7552} from "./handler7552";
const app = express()
app.get('/7552', handler7552)
app.listen(3000, () => {})
        