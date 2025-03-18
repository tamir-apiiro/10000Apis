
const express = require('express')
import {handler2882} from "./handler2882";
const app = express()
app.get('/2882', handler2882)
app.listen(3000, () => {})
        