
const express = require('express')
import {handler1016} from "./handler1016";
const app = express()
app.get('/1016', handler1016)
app.listen(3000, () => {})
        