
const express = require('express')
import {handler4430} from "./handler4430";
const app = express()
app.get('/4430', handler4430)
app.listen(3000, () => {})
        