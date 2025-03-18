
const express = require('express')
import {handler1769} from "./handler1769";
const app = express()
app.get('/1769', handler1769)
app.listen(3000, () => {})
        