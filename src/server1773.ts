
const express = require('express')
import {handler1773} from "./handler1773";
const app = express()
app.get('/1773', handler1773)
app.listen(3000, () => {})
        