
const express = require('express')
import {handler7666} from "./handler7666";
const app = express()
app.get('/7666', handler7666)
app.listen(3000, () => {})
        