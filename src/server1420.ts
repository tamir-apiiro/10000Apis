
const express = require('express')
import {handler1420} from "./handler1420";
const app = express()
app.get('/1420', handler1420)
app.listen(3000, () => {})
        