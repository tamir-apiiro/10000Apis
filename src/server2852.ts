
const express = require('express')
import {handler2852} from "./handler2852";
const app = express()
app.get('/2852', handler2852)
app.listen(3000, () => {})
        