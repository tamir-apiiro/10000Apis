
const express = require('express')
import {handler1578} from "./handler1578";
const app = express()
app.get('/1578', handler1578)
app.listen(3000, () => {})
        