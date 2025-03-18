
const express = require('express')
import {handler1186} from "./handler1186";
const app = express()
app.get('/1186', handler1186)
app.listen(3000, () => {})
        