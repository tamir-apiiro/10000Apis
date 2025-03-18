
const express = require('express')
import {handler703} from "./handler703";
const app = express()
app.get('/703', handler703)
app.listen(3000, () => {})
        