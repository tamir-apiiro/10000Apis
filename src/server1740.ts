
const express = require('express')
import {handler1740} from "./handler1740";
const app = express()
app.get('/1740', handler1740)
app.listen(3000, () => {})
        