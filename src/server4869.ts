
const express = require('express')
import {handler4869} from "./handler4869";
const app = express()
app.get('/4869', handler4869)
app.listen(3000, () => {})
        