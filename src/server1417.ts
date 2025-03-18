
const express = require('express')
import {handler1417} from "./handler1417";
const app = express()
app.get('/1417', handler1417)
app.listen(3000, () => {})
        