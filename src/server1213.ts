
const express = require('express')
import {handler1213} from "./handler1213";
const app = express()
app.get('/1213', handler1213)
app.listen(3000, () => {})
        