
const express = require('express')
import {handler1121} from "./handler1121";
const app = express()
app.get('/1121', handler1121)
app.listen(3000, () => {})
        