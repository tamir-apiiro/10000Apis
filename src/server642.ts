
const express = require('express')
import {handler642} from "./handler642";
const app = express()
app.get('/642', handler642)
app.listen(3000, () => {})
        