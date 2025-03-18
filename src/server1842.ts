
const express = require('express')
import {handler1842} from "./handler1842";
const app = express()
app.get('/1842', handler1842)
app.listen(3000, () => {})
        