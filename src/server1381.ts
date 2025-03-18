
const express = require('express')
import {handler1381} from "./handler1381";
const app = express()
app.get('/1381', handler1381)
app.listen(3000, () => {})
        