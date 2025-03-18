
const express = require('express')
import {handler2502} from "./handler2502";
const app = express()
app.get('/2502', handler2502)
app.listen(3000, () => {})
        