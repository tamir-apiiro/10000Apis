
const express = require('express')
import {handler1650} from "./handler1650";
const app = express()
app.get('/1650', handler1650)
app.listen(3000, () => {})
        