
const express = require('express')
import {handler1777} from "./handler1777";
const app = express()
app.get('/1777', handler1777)
app.listen(3000, () => {})
        