
const express = require('express')
import {handler1430} from "./handler1430";
const app = express()
app.get('/1430', handler1430)
app.listen(3000, () => {})
        