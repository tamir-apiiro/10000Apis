
const express = require('express')
import {handler1274} from "./handler1274";
const app = express()
app.get('/1274', handler1274)
app.listen(3000, () => {})
        