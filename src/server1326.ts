
const express = require('express')
import {handler1326} from "./handler1326";
const app = express()
app.get('/1326', handler1326)
app.listen(3000, () => {})
        