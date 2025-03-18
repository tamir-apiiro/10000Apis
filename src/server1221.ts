
const express = require('express')
import {handler1221} from "./handler1221";
const app = express()
app.get('/1221', handler1221)
app.listen(3000, () => {})
        