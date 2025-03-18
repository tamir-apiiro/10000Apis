
const express = require('express')
import {handler1181} from "./handler1181";
const app = express()
app.get('/1181', handler1181)
app.listen(3000, () => {})
        