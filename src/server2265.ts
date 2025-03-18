
const express = require('express')
import {handler2265} from "./handler2265";
const app = express()
app.get('/2265', handler2265)
app.listen(3000, () => {})
        