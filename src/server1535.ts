
const express = require('express')
import {handler1535} from "./handler1535";
const app = express()
app.get('/1535', handler1535)
app.listen(3000, () => {})
        