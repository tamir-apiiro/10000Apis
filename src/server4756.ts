
const express = require('express')
import {handler4756} from "./handler4756";
const app = express()
app.get('/4756', handler4756)
app.listen(3000, () => {})
        