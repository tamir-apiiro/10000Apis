
const express = require('express')
import {handler1742} from "./handler1742";
const app = express()
app.get('/1742', handler1742)
app.listen(3000, () => {})
        