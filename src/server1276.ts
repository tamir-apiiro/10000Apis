
const express = require('express')
import {handler1276} from "./handler1276";
const app = express()
app.get('/1276', handler1276)
app.listen(3000, () => {})
        