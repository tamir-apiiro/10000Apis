
const express = require('express')
import {handler1802} from "./handler1802";
const app = express()
app.get('/1802', handler1802)
app.listen(3000, () => {})
        