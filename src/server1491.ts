
const express = require('express')
import {handler1491} from "./handler1491";
const app = express()
app.get('/1491', handler1491)
app.listen(3000, () => {})
        