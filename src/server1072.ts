
const express = require('express')
import {handler1072} from "./handler1072";
const app = express()
app.get('/1072', handler1072)
app.listen(3000, () => {})
        