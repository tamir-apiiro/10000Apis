
const express = require('express')
import {handler1238} from "./handler1238";
const app = express()
app.get('/1238', handler1238)
app.listen(3000, () => {})
        