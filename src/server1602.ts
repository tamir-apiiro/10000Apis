
const express = require('express')
import {handler1602} from "./handler1602";
const app = express()
app.get('/1602', handler1602)
app.listen(3000, () => {})
        