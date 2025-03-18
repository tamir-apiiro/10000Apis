
const express = require('express')
import {handler1197} from "./handler1197";
const app = express()
app.get('/1197', handler1197)
app.listen(3000, () => {})
        