
const express = require('express')
import {handler1587} from "./handler1587";
const app = express()
app.get('/1587', handler1587)
app.listen(3000, () => {})
        