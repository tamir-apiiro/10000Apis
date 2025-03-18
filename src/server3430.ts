
const express = require('express')
import {handler3430} from "./handler3430";
const app = express()
app.get('/3430', handler3430)
app.listen(3000, () => {})
        