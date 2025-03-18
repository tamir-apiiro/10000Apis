
const express = require('express')
import {handler4951} from "./handler4951";
const app = express()
app.get('/4951', handler4951)
app.listen(3000, () => {})
        