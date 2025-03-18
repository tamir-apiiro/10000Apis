
const express = require('express')
import {handler1625} from "./handler1625";
const app = express()
app.get('/1625', handler1625)
app.listen(3000, () => {})
        