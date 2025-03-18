
const express = require('express')
import {handler1925} from "./handler1925";
const app = express()
app.get('/1925', handler1925)
app.listen(3000, () => {})
        