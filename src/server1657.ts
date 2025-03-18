
const express = require('express')
import {handler1657} from "./handler1657";
const app = express()
app.get('/1657', handler1657)
app.listen(3000, () => {})
        