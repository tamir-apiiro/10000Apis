
const express = require('express')
import {handler595} from "./handler595";
const app = express()
app.get('/595', handler595)
app.listen(3000, () => {})
        