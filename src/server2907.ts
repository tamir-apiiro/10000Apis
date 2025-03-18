
const express = require('express')
import {handler2907} from "./handler2907";
const app = express()
app.get('/2907', handler2907)
app.listen(3000, () => {})
        