
const express = require('express')
import {handler2915} from "./handler2915";
const app = express()
app.get('/2915', handler2915)
app.listen(3000, () => {})
        