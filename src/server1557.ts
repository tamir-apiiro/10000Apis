
const express = require('express')
import {handler1557} from "./handler1557";
const app = express()
app.get('/1557', handler1557)
app.listen(3000, () => {})
        