
const express = require('express')
import {handler1561} from "./handler1561";
const app = express()
app.get('/1561', handler1561)
app.listen(3000, () => {})
        