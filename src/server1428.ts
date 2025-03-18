
const express = require('express')
import {handler1428} from "./handler1428";
const app = express()
app.get('/1428', handler1428)
app.listen(3000, () => {})
        