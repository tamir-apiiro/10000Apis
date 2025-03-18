
const express = require('express')
import {handler6430} from "./handler6430";
const app = express()
app.get('/6430', handler6430)
app.listen(3000, () => {})
        