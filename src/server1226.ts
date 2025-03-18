
const express = require('express')
import {handler1226} from "./handler1226";
const app = express()
app.get('/1226', handler1226)
app.listen(3000, () => {})
        