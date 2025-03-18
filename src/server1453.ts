
const express = require('express')
import {handler1453} from "./handler1453";
const app = express()
app.get('/1453', handler1453)
app.listen(3000, () => {})
        