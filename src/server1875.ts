
const express = require('express')
import {handler1875} from "./handler1875";
const app = express()
app.get('/1875', handler1875)
app.listen(3000, () => {})
        