
const express = require('express')
import {handler1342} from "./handler1342";
const app = express()
app.get('/1342', handler1342)
app.listen(3000, () => {})
        