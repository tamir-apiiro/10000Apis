
const express = require('express')
import {handler1199} from "./handler1199";
const app = express()
app.get('/1199', handler1199)
app.listen(3000, () => {})
        