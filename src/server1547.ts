
const express = require('express')
import {handler1547} from "./handler1547";
const app = express()
app.get('/1547', handler1547)
app.listen(3000, () => {})
        