
const express = require('express')
import {handler1349} from "./handler1349";
const app = express()
app.get('/1349', handler1349)
app.listen(3000, () => {})
        