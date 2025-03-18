
const express = require('express')
import {handler723} from "./handler723";
const app = express()
app.get('/723', handler723)
app.listen(3000, () => {})
        