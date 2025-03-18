
const express = require('express')
import {handler2112} from "./handler2112";
const app = express()
app.get('/2112', handler2112)
app.listen(3000, () => {})
        