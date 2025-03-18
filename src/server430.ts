
const express = require('express')
import {handler430} from "./handler430";
const app = express()
app.get('/430', handler430)
app.listen(3000, () => {})
        