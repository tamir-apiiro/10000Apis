
const express = require('express')
import {handler2724} from "./handler2724";
const app = express()
app.get('/2724', handler2724)
app.listen(3000, () => {})
        