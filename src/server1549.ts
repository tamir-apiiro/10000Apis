
const express = require('express')
import {handler1549} from "./handler1549";
const app = express()
app.get('/1549', handler1549)
app.listen(3000, () => {})
        