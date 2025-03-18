
const express = require('express')
import {handler1744} from "./handler1744";
const app = express()
app.get('/1744', handler1744)
app.listen(3000, () => {})
        