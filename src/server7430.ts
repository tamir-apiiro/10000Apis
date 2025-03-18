
const express = require('express')
import {handler7430} from "./handler7430";
const app = express()
app.get('/7430', handler7430)
app.listen(3000, () => {})
        