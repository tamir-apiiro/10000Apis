
const express = require('express')
import {handler1763} from "./handler1763";
const app = express()
app.get('/1763', handler1763)
app.listen(3000, () => {})
        