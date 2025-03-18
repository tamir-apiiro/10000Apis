
const express = require('express')
import {handler1759} from "./handler1759";
const app = express()
app.get('/1759', handler1759)
app.listen(3000, () => {})
        