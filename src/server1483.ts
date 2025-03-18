
const express = require('express')
import {handler1483} from "./handler1483";
const app = express()
app.get('/1483', handler1483)
app.listen(3000, () => {})
        