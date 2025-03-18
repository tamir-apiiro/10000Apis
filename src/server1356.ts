
const express = require('express')
import {handler1356} from "./handler1356";
const app = express()
app.get('/1356', handler1356)
app.listen(3000, () => {})
        