
const express = require('express')
import {handler1663} from "./handler1663";
const app = express()
app.get('/1663', handler1663)
app.listen(3000, () => {})
        