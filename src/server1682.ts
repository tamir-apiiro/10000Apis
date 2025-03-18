
const express = require('express')
import {handler1682} from "./handler1682";
const app = express()
app.get('/1682', handler1682)
app.listen(3000, () => {})
        