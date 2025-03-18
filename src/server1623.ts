
const express = require('express')
import {handler1623} from "./handler1623";
const app = express()
app.get('/1623', handler1623)
app.listen(3000, () => {})
        