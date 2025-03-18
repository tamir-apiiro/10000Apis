
const express = require('express')
import {handler1814} from "./handler1814";
const app = express()
app.get('/1814', handler1814)
app.listen(3000, () => {})
        