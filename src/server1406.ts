
const express = require('express')
import {handler1406} from "./handler1406";
const app = express()
app.get('/1406', handler1406)
app.listen(3000, () => {})
        