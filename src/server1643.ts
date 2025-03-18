
const express = require('express')
import {handler1643} from "./handler1643";
const app = express()
app.get('/1643', handler1643)
app.listen(3000, () => {})
        