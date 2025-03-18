
const express = require('express')
import {handler1369} from "./handler1369";
const app = express()
app.get('/1369', handler1369)
app.listen(3000, () => {})
        