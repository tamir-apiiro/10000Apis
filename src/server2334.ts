
const express = require('express')
import {handler2334} from "./handler2334";
const app = express()
app.get('/2334', handler2334)
app.listen(3000, () => {})
        