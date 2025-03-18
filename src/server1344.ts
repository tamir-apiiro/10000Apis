
const express = require('express')
import {handler1344} from "./handler1344";
const app = express()
app.get('/1344', handler1344)
app.listen(3000, () => {})
        