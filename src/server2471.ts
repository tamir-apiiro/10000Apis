
const express = require('express')
import {handler2471} from "./handler2471";
const app = express()
app.get('/2471', handler2471)
app.listen(3000, () => {})
        