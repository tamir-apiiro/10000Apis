
const express = require('express')
import {handler1258} from "./handler1258";
const app = express()
app.get('/1258', handler1258)
app.listen(3000, () => {})
        