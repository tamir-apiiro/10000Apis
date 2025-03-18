
const express = require('express')
import {handler1041} from "./handler1041";
const app = express()
app.get('/1041', handler1041)
app.listen(3000, () => {})
        