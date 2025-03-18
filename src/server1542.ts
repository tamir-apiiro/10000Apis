
const express = require('express')
import {handler1542} from "./handler1542";
const app = express()
app.get('/1542', handler1542)
app.listen(3000, () => {})
        