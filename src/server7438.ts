
const express = require('express')
import {handler7438} from "./handler7438";
const app = express()
app.get('/7438', handler7438)
app.listen(3000, () => {})
        