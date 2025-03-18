
const express = require('express')
import {handler1708} from "./handler1708";
const app = express()
app.get('/1708', handler1708)
app.listen(3000, () => {})
        