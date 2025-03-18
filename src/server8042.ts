
const express = require('express')
import {handler8042} from "./handler8042";
const app = express()
app.get('/8042', handler8042)
app.listen(3000, () => {})
        