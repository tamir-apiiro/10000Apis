
const express = require('express')
import {handler4681} from "./handler4681";
const app = express()
app.get('/4681', handler4681)
app.listen(3000, () => {})
        