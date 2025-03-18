
const express = require('express')
import {handler1456} from "./handler1456";
const app = express()
app.get('/1456', handler1456)
app.listen(3000, () => {})
        