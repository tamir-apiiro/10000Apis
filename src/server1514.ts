
const express = require('express')
import {handler1514} from "./handler1514";
const app = express()
app.get('/1514', handler1514)
app.listen(3000, () => {})
        