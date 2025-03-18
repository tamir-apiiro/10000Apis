
const express = require('express')
import {handler1405} from "./handler1405";
const app = express()
app.get('/1405', handler1405)
app.listen(3000, () => {})
        