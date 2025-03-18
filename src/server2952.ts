
const express = require('express')
import {handler2952} from "./handler2952";
const app = express()
app.get('/2952', handler2952)
app.listen(3000, () => {})
        