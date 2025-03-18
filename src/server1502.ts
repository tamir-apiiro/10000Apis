
const express = require('express')
import {handler1502} from "./handler1502";
const app = express()
app.get('/1502', handler1502)
app.listen(3000, () => {})
        