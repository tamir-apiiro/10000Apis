
const express = require('express')
import {handler1489} from "./handler1489";
const app = express()
app.get('/1489', handler1489)
app.listen(3000, () => {})
        