
const express = require('express')
import {handler1448} from "./handler1448";
const app = express()
app.get('/1448', handler1448)
app.listen(3000, () => {})
        