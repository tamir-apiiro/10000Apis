
const express = require('express')
import {handler1426} from "./handler1426";
const app = express()
app.get('/1426', handler1426)
app.listen(3000, () => {})
        