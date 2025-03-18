
const express = require('express')
import {handler1728} from "./handler1728";
const app = express()
app.get('/1728', handler1728)
app.listen(3000, () => {})
        