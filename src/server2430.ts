
const express = require('express')
import {handler2430} from "./handler2430";
const app = express()
app.get('/2430', handler2430)
app.listen(3000, () => {})
        