
const express = require('express')
import {handler1370} from "./handler1370";
const app = express()
app.get('/1370', handler1370)
app.listen(3000, () => {})
        