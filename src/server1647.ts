
const express = require('express')
import {handler1647} from "./handler1647";
const app = express()
app.get('/1647', handler1647)
app.listen(3000, () => {})
        