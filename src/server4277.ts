
const express = require('express')
import {handler4277} from "./handler4277";
const app = express()
app.get('/4277', handler4277)
app.listen(3000, () => {})
        