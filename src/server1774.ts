
const express = require('express')
import {handler1774} from "./handler1774";
const app = express()
app.get('/1774', handler1774)
app.listen(3000, () => {})
        