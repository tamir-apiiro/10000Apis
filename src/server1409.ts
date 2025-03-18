
const express = require('express')
import {handler1409} from "./handler1409";
const app = express()
app.get('/1409', handler1409)
app.listen(3000, () => {})
        