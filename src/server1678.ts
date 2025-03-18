
const express = require('express')
import {handler1678} from "./handler1678";
const app = express()
app.get('/1678', handler1678)
app.listen(3000, () => {})
        