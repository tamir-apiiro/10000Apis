
const express = require('express')
import {handler4625} from "./handler4625";
const app = express()
app.get('/4625', handler4625)
app.listen(3000, () => {})
        