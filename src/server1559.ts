
const express = require('express')
import {handler1559} from "./handler1559";
const app = express()
app.get('/1559', handler1559)
app.listen(3000, () => {})
        