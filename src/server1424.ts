
const express = require('express')
import {handler1424} from "./handler1424";
const app = express()
app.get('/1424', handler1424)
app.listen(3000, () => {})
        