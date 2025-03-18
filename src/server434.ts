
const express = require('express')
import {handler434} from "./handler434";
const app = express()
app.get('/434', handler434)
app.listen(3000, () => {})
        