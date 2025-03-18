
const express = require('express')
import {handler1761} from "./handler1761";
const app = express()
app.get('/1761', handler1761)
app.listen(3000, () => {})
        