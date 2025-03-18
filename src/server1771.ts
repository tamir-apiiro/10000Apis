
const express = require('express')
import {handler1771} from "./handler1771";
const app = express()
app.get('/1771', handler1771)
app.listen(3000, () => {})
        