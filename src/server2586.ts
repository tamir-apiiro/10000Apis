
const express = require('express')
import {handler2586} from "./handler2586";
const app = express()
app.get('/2586', handler2586)
app.listen(3000, () => {})
        