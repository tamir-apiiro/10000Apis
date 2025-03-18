
const express = require('express')
import {handler4147} from "./handler4147";
const app = express()
app.get('/4147', handler4147)
app.listen(3000, () => {})
        