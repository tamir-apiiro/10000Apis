
const express = require('express')
import {handler4646} from "./handler4646";
const app = express()
app.get('/4646', handler4646)
app.listen(3000, () => {})
        