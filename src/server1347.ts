
const express = require('express')
import {handler1347} from "./handler1347";
const app = express()
app.get('/1347', handler1347)
app.listen(3000, () => {})
        