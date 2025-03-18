
const express = require('express')
import {handler1786} from "./handler1786";
const app = express()
app.get('/1786', handler1786)
app.listen(3000, () => {})
        