
const express = require('express')
import {handler4895} from "./handler4895";
const app = express()
app.get('/4895', handler4895)
app.listen(3000, () => {})
        