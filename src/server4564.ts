
const express = require('express')
import {handler4564} from "./handler4564";
const app = express()
app.get('/4564', handler4564)
app.listen(3000, () => {})
        