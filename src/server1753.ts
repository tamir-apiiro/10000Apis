
const express = require('express')
import {handler1753} from "./handler1753";
const app = express()
app.get('/1753', handler1753)
app.listen(3000, () => {})
        