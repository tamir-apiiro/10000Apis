
const express = require('express')
import {handler1462} from "./handler1462";
const app = express()
app.get('/1462', handler1462)
app.listen(3000, () => {})
        