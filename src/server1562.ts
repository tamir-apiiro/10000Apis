
const express = require('express')
import {handler1562} from "./handler1562";
const app = express()
app.get('/1562', handler1562)
app.listen(3000, () => {})
        