
const express = require('express')
import {handler4666} from "./handler4666";
const app = express()
app.get('/4666', handler4666)
app.listen(3000, () => {})
        