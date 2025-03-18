
const express = require('express')
import {handler1506} from "./handler1506";
const app = express()
app.get('/1506', handler1506)
app.listen(3000, () => {})
        