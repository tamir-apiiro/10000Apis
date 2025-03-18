
const express = require('express')
import {handler1792} from "./handler1792";
const app = express()
app.get('/1792', handler1792)
app.listen(3000, () => {})
        