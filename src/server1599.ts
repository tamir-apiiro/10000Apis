
const express = require('express')
import {handler1599} from "./handler1599";
const app = express()
app.get('/1599', handler1599)
app.listen(3000, () => {})
        