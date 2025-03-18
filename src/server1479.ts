
const express = require('express')
import {handler1479} from "./handler1479";
const app = express()
app.get('/1479', handler1479)
app.listen(3000, () => {})
        